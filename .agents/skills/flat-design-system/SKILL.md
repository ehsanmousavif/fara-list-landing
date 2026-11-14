---
name: flat-design-system
description: Enforce a consistent flat, borderless, shadowless UI design system across existing and new interfaces. Use when creating, modifying, refactoring, or auditing UI components and layouts.
---

# Flat Design System

## Purpose

Apply a consistent, minimal, flat visual language across the application.

These rules are mandatory for all UI work unless the user explicitly overrides a specific rule. Inspect the existing project architecture before making changes. Extend existing tokens and shared components instead of introducing competing design systems.

**Core principles:**
- Zero decorative borders.
- Zero box shadows.
- Background-based visual hierarchy.
- Consistent corner shapes and spacing.
- Shared component sizing.
- Semantic design tokens.
- Accessible, responsive interactions.
- Preserve existing application behavior.

## 1. Inspect Before Implementing

Before changing UI:

1. Identify the framework, styling solution, Tailwind version, and component library.
2. Inspect the existing theme, design tokens, global styles, and shared components.
3. Identify existing button, badge, input, container, and navigation patterns.
4. Reuse existing components and tokens wherever possible.
5. Verify installed library APIs instead of assuming version-specific behavior.

Do not create a parallel design system or modify unrelated functionality.

## 2. Flat and Borderless Styling

All UI components must be borderless and shadowless.

This includes containers, cards, buttons, inputs, selects, dialogs, drawers, popovers, menus, navigation, badges, tables, and tooltips.

### Rules

- Never introduce decorative borders.
- Never use `box-shadow`, including inset shadows.
- Never use shadows for elevation, hover, focus, or floating surfaces.
- Remove existing borders and shadows from components being modified.
- Do not replace borders with outlines, glows, gradients, or other decorative effects.
- Preserve visible and accessible keyboard focus states.

Use backgrounds, typography, spacing, and corner shapes to establish hierarchy.

Do not modify unrelated components merely to enforce these rules outside the scope of the task.

## 3. Background-Based Hierarchy

Use semantic background colors to distinguish visual groups.

Examples:
- Page background vs. section surface.
- Input surface vs. parent surface.
- Primary button vs. surrounding content.
- Selected navigation vs. unselected navigation.
- Dialog surface vs. page background.

Keep the number of distinct surfaces minimal. Components within the same visual group should share the same surface treatment.

Avoid unnecessary gradients, textures, transparency effects, and decorative color variations.

## 4. Corner Shape System

Use `corner-shape` as the preferred corner-shaping mechanism, with `border-radius` as the fallback.

Preserve the project's existing Tailwind `rounded-*` conventions and shape tokens wherever practical.

Example:

```css
.ui-rounded {
  border-radius: 1rem;
}

@supports (corner-shape: superellipse(1.5)) {
  .ui-rounded {
    corner-shape: superellipse(1.5);
  }
}
```

### Rules

- Never assume `corner-shape` is universally supported.
- Always preserve a working `border-radius` fallback.
- Reuse a small, consistent set of shape tokens.
- Apply consistent shapes to components with equivalent semantic roles.
- Do not introduce arbitrary radii or inconsistent rounding.
- Do not add decorative shapes solely because `corner-shape` is available.

When working with Tailwind, integrate the implementation into the existing utility or theme architecture rather than creating unnecessary one-off CSS.

## 5. Horizontal Spacing

Use `px-4` as the default horizontal padding for parent containers that establish a content boundary.

Applies to page sections, content wrappers, headers, footers, navigation, and similar layout containers.

### Rules

- Prefer `px-4` for standard horizontal alignment.
- Preserve established responsive layouts when necessary.
- Keep related sections aligned consistently.
- Avoid redundant nested horizontal padding.
- Do not add `px-4` to every child when the parent already defines the content boundary.
- Allow component-internal padding when required for usability, such as button and input padding.

The goal is consistent alignment, not blindly applying the same utility to every element.

## 6. Button System

All buttons with the same semantic role must share a consistent sizing system.

Standardize:
- Height and minimum touch target.
- Horizontal padding.
- Typography and font weight.
- Corner shape.
- Icon dimensions.
- Icon-to-label spacing.
- Alignment.

### Rules

- Reuse the existing shared Button component and its size variants.
- Configure shared component tokens instead of duplicating styles.
- Keep primary, secondary, and other variants dimensionally consistent.
- Allow variants to differ in semantic background and foreground colors.
- Give icon-only buttons consistent dimensions and accessible labels.
- Prevent loading and disabled states from causing layout shifts.
- Do not introduce one-off button sizes to accommodate individual labels.

If the project uses HeroUI, inspect the installed version and configure its supported APIs. Create a thin project-level wrapper only when necessary.

## 7. Badge System

All badges must follow shared sizing and shape conventions.

Standardize:
- Height or minimum height.
- Horizontal padding.
- Typography.
- Corner shape.
- Icon size and spacing.

Badge variants may differ in semantic color, but not in standard dimensions.

Reuse the existing badge component and variant system. Verify the installed component library API before implementation.

Do not enlarge individual badges simply to emphasize a status.

## 8. Semantic Color System

All UI colors must come from the project's centralized semantic theme.

### When using HeroUI

- Prefer the installed version's existing semantic palette and theme tokens.
- Reuse supported tokens such as `primary`, `secondary`, `success`, `warning`, `danger`, `default`, and other available semantic values.
- Follow the existing theme configuration and documented component APIs.
- Do not create a competing palette when the existing theme meets the requirements.
- Avoid hardcoded hexadecimal and RGB values in individual components when suitable semantic tokens exist.

### When not using HeroUI

Reuse the project's existing theme. If no semantic color system exists, establish a minimal centralized palette containing:

- `primary`
- `secondary`
- `background`
- `foreground`
- `surface`
- `muted`
- `muted-foreground`
- `success`
- `warning`
- `danger`
- `disabled`

Use the existing CSS variables, Tailwind theme, or styling architecture.

### Color rules

- Never scatter arbitrary colors across components.
- Maintain sufficient foreground/background contrast.
- Do not rely on color alone to communicate errors, selection, or status.
- Support dark mode when required by the application.
- Introduce additional tokens only when there is a clear design-system need.

## 9. Component Reuse

Before creating a new component, search for an existing equivalent.

Prefer shared implementations for:
- Buttons and icon buttons.
- Inputs and form controls.
- Badges and status indicators.
- Containers and surfaces.
- Dialogs, drawers, popovers, and menus.
- Navigation elements.
- Typography, spacing, and corner shapes.

Extend existing components and variants instead of implementing competing versions.

Keep variants semantic, minimal, and reusable. Avoid repeated one-off class combinations.

Preserve the existing component library and its architecture unless a concrete technical reason requires a change.

## 10. Interaction States

All interactive states must follow the same flat design system.

### Hover
Use subtle semantic background or foreground color changes. Never add borders, shadows, glows, or decorative effects.

### Focus
Provide a clearly visible keyboard focus indicator without decorative borders or shadows. Use an accessible background change or another sufficiently distinguishable, borderless treatment.

Never remove focus visibility or sacrifice keyboard accessibility.

### Active and selected
Use semantic background and foreground tokens to indicate selection and interaction.

### Disabled
Use the existing disabled tokens and correct interaction behavior. Keep disabled elements distinguishable without borders or shadows.

### Loading
Preserve the component's dimensions and alignment. Avoid adding decorative containers or changing its size during loading.

## 11. Accessibility and Responsive Behavior

Never sacrifice usability to achieve the visual style.

- Preserve semantic HTML and accessible labels.
- Maintain readable text contrast.
- Preserve keyboard navigation and visible focus states.
- Respect reduced-motion preferences.
- Maintain usable touch targets.
- Prevent horizontal overflow and unintended clipping.
- Preserve responsive layouts.
- Support RTL and LTR layouts where required.
- Prefer logical CSS properties when appropriate.
- Ensure dropdowns, dialogs, and floating elements remain usable on small screens.

## 12. Implementation Workflow

For every UI task:

1. Inspect the existing architecture and relevant components.
2. Identify the applicable tokens, variants, and established conventions.
3. Determine which shared components need changes.
4. Implement the requested UI using existing project patterns.
5. Apply the flat, borderless, shadowless styling rules.
6. Preserve functionality, routing, API behavior, validation, state management, and component contracts.
7. Check corner-shape support and the `border-radius` fallback.
8. Verify consistent spacing, button sizing, badge sizing, and semantic colors.
9. Review responsive behavior, RTL support, accessibility, and interaction states.
10. Run relevant checks when available and report any limitations.

Do not rewrite unrelated application logic or refactor unrelated files during visual tasks.

## 13. Final UI Audit

Before completing a UI task, verify all applicable items:

- [ ] No decorative borders remain in the modified UI.
- [ ] No box shadows or inset shadows remain in the modified UI.
- [ ] Parent containers use consistent `px-4` alignment where appropriate.
- [ ] Corner shapes use `corner-shape` with a working `border-radius` fallback.
- [ ] Buttons use shared sizing conventions.
- [ ] Badges use shared sizing conventions.
- [ ] Components use semantic color tokens.
- [ ] Existing theme and component-library APIs are reused.
- [ ] Background colors establish clear, minimal hierarchy.
- [ ] Hover, focus, active, disabled, and loading states are consistent.
- [ ] Responsive layouts and RTL behavior are preserved where applicable.
- [ ] Accessibility is maintained.
- [ ] Existing functionality has not been unintentionally changed.
- [ ] Relevant checks have been run when available.

Only claim that an audit passed when the relevant code has actually been inspected.

## 14. Priority and Exceptions

This Skill defines the default UI design contract for the project.

When an existing implementation conflicts with these rules, apply the design system to the UI being created or modified while preserving unrelated application behavior.

Explicit user instructions may override individual rules for a specific task. Keep exceptions scoped to that request; do not silently redefine the global design system.

When a design decision is unclear, inspect the existing theme and components first. Prefer established project conventions over inventing new values or patterns.
