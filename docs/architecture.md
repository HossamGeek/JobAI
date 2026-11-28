# Architecture and File Placement

## Shared and feature-private contracts

Contracts used by multiple applications or features belong in the appropriate public library under
`libs/`. Common application contracts are exported from `libs/common/index.ts`. A contract used by
only one feature stays in that feature's own folder instead of being added to `common`.

Feature libraries must not depend on higher-level application code or introduce circular library
imports. Shared dependencies should point toward lower-level libraries such as `common`.

## Feature file placement

- Entities belong in `feature/entities`.
- DTO classes belong in `feature/dto`.
- Feature-private interfaces, enums, and constants belong in separate files within the feature.
- Service and controller files should consume contracts rather than declare inline interfaces, enums,
  or constants.

## Library layout and public boundaries

Libraries use a flat layout directly below `libs/<library>/`; libraries must not contain a nested
`src/` directory. Each reusable library exposes one public `index.ts`. Consumers should import from
`@app/<library>` or its documented public subpaths rather than reaching into application-relative
paths or private implementation details.
