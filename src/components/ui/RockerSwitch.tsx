import React, { useState } from "react";
import "./RockerSwitch.css";

interface RockerSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  className?: string;
}

/**
 * تابع اعمال ویبره و فیدبک هپتیک چندگانه سازگار با تمامی مرورگرها و پلتفرم‌ها:
 * ۱. Standard Web Vibration API (Android Chrome, Edge, Samsung Internet, Opera)
 * ۲. Vendor prefixes (webkitVibrate, mozVibrate, msVibrate)
 * ۳. Gamepad / Hardware Actuator Rumble (در صورت اتصال دسته‌های لمسی)
 * ۴. Web Audio Tactile Impulse (شبیه‌ساز لرزش مکانیکی برای iOS Safari و سیستم‌های دسکتاپ)
 */
export const triggerUniversalVibration = () => {
  if (typeof window === "undefined") return;

  // ۱. بررسی تمامی متدهای ویبره استاندار و اختصاصی مرورگرها
  const nav = navigator as unknown as {
    vibrate?: (pattern: number | number[]) => boolean;
    mozVibrate?: (pattern: number | number[]) => boolean;
    webkitVibrate?: (pattern: number | number[]) => boolean;
    msVibrate?: (pattern: number | number[]) => boolean;
  };

  const vibrateFn =
    (typeof nav.vibrate === "function" && nav.vibrate.bind(navigator)) ||
    (typeof nav.webkitVibrate === "function" && nav.webkitVibrate.bind(navigator)) ||
    (typeof nav.mozVibrate === "function" && nav.mozVibrate.bind(navigator)) ||
    (typeof nav.msVibrate === "function" && nav.msVibrate.bind(navigator));

  if (vibrateFn) {
    try {
      // الگوی لرزش ملموس: ۱۴۰ میلی‌ثانیه لرزش، ۶۰ میلی‌ثانیه مکث، ۱۰۰ میلی‌ثانیه لرزش مجدد
      vibrateFn([140, 60, 100]);
    } catch {
      // ignore
    }
  }

  // ۲. فیدبک هپتیک سخت‌افزاری مرورگر در صورت وجود لرزاننده
  if ("getGamepads" in navigator) {
    try {
      const gamepads = navigator.getGamepads?.() || [];
      for (const gp of gamepads) {
        if (gp && "vibrationActuator" in gp && gp.vibrationActuator) {
          (gp.vibrationActuator as unknown as { playEffect: (type: string, opts: object) => Promise<unknown> }).playEffect("dual-rumble", {
            startDelay: 0,
            duration: 160,
            weakMagnitude: 1.0,
            strongMagnitude: 1.0,
          });
        }
      }
    } catch {
      // ignore
    }
  }

  // ۳. پالس بم مکانیکی با Web Audio API برای حس لمسی دکمه در تمام مرورگرها
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (AudioCtx) {
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    }
  } catch {
    // ignore
  }
};

export const RockerSwitch: React.FC<RockerSwitchProps> = ({
  checked,
  onChange,
  disabled = false,
  leftLabel = "off",
  rightLabel = "on",
  className = "",
}) => {
  const [isVibrating, setIsVibrating] = useState(false);

  const handleTrigger = () => {
    if (!disabled) {
      triggerUniversalVibration();
      setIsVibrating(true);
      setTimeout(() => {
        setIsVibrating(false);
      }, 220);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleTrigger();
    onChange(e.target.checked);
  };

  return (
    <label
      onPointerDown={handleTrigger}
      onTouchStart={handleTrigger}
      onClick={handleTrigger}
      className={`!w-18 !h-8 rocker-switch ${isVibrating ? "is-vibrating" : ""} ${className}`}
      style={{ direction: "ltr" }}
    >
      <input
        className="rocker-cb"
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <span className="rocker-toggle">
        <span className="rocker-left !px-4 text-sm">{leftLabel}</span>
        <span className="rocker-right !px-4 text-sm ">{rightLabel}</span>
      </span>
    </label>
  );
};

export default RockerSwitch;
