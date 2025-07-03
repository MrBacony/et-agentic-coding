# Example Instruction and Prompt Files for Angular Agentic Coding

This document contains examples of instruction files and prompt files that can be used during the Agentic Coding with Angular workshop.

## Instruction Files

### `angular-project-structure.instructions.md`

```markdown
# Angular Project Structure

This project follows a feature-based organization pattern with core services and shared components.

## Directory Structure

- `/src/app/features/` - Feature modules grouped by domain functionality
- `/src/app/core/` - Core services, guards, and models used throughout the application
- `/src/app/shared/` - Reusable components, pipes, and directives
- `/src/assets/` - Static assets like images and global styles

## Naming Conventions

- Components: `feature-name.component.ts`
- Services: `feature-name.service.ts`
- Models: `feature-name.model.ts`
- Guards: `feature-name.guard.ts`
- Pipes: `feature-name.pipe.ts`

## State Management

This application uses NgRx for state management:
- Actions: `/src/app/store/actions/`
- Reducers: `/src/app/store/reducers/`
- Selectors: `/src/app/store/selectors/`
- Effects: `/src/app/store/effects/`

## Coding Standards

- Use OnPush change detection strategy for optimal performance
- Follow Angular style guide for naming and file organization
- Implement lazy loading for feature modules
- Use strongly typed models for API responses
- Write comprehensive unit tests for components and services
```

### `api-integration.instructions.md`

```markdown
# API Integration

This application uses Angular's HttpClient for API communication with standardized error handling and authentication.

## API Structure

- Base URL: Configured in environment files
- Endpoints: RESTful API following standard conventions
- Authentication: JWT token sent in Authorization header

## Service Pattern

All API services follow this pattern:
- Injectable with providedIn: 'root'
- Methods return Observable<T> with proper type
- Error handling through interceptors or catchError operators

## Response Models

- All API responses are mapped to typed interfaces
- Models are defined in `/src/app/core/models/`
- Use optional properties for fields that might be missing

## Error Handling

- Global HTTP interceptor for common errors
- Service-specific error handling for unique cases
- User-friendly error messages displayed through notification service

## Example

```typescript
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) {}

  getUser(id: string): Observable<User> {
    return this.http.get<UserResponse>(`${this.apiUrl}/${id}`)
      .pipe(
        map(response => this.mapToUser(response)),
        catchError(this.handleError)
      );
  }

  // ... other methods and helpers
}
```
```

### `testing-strategy.instructions.md`

```markdown
# Testing Strategy

This project uses a comprehensive testing approach with unit tests, integration tests, and e2e tests.

## Unit Testing

- Framework: Jasmine with Karma runner
- Component tests focus on:
  - DOM rendering and behavior
  - Component logic and state changes
  - @Input() and @Output() interactions
- Service tests focus on:
  - Method logic
  - API interactions (with HttpClientTestingModule)
  - Error handling

## Integration Testing

- Test modules configure TestBed with multiple real components
- Focus on component interactions
- Shallow integration tests preferred when possible

## E2E Testing

- Framework: Playwright
- Tests critical user flows
- Covers authentication, navigation, and core functionality

## Test Coverage Goals

- Unit tests: 80%+ coverage
- Integration tests: Key user interactions
- E2E tests: Critical business paths

## Mocking Strategy

- MockProvider for service dependencies
- HttpClientTestingModule for API mocking
- ActivatedRouteStub for route testing
```

## Prompt Files

### `component.prompt.md`

```markdown
[ROLE]
You are an Angular expert who specializes in creating well-structured, performant components.

[GOAL]
Create an Angular component that follows best practices for the following requirements.

[CONTEXT]
This component will be part of a larger application that uses:
- Angular 17+ with Standalone Components
- OnPush change detection
- TypeScript strict mode
- NgRx for state management
- SCSS for styling

[REQUIREMENTS]
Component Name: {{componentName}}
Purpose: {{purpose}}
Inputs: {{inputs}}
Outputs: {{outputs}}
Additional Features:
- Should handle loading states
- Should handle error states
- Should be responsive
- Should be accessible

[OUTPUT EXPECTATIONS]
Please provide:
1. Component TypeScript file
2. Component Template (HTML)
3. Component Styles (SCSS)
4. Unit tests for the component
5. Any required models/interfaces
6. Usage example
```

### `service.prompt.md`

```markdown
[ROLE]
You are an Angular expert who specializes in creating well-architected services.

[GOAL]
Create an Angular service that follows best practices for the following requirements.

[CONTEXT]
This service will be part of a larger application that uses:
- Angular 17+
- HttpClient for API communication
- RxJS for asynchronous operations
- Strong typing for all data models
- Centralized error handling

[REQUIREMENTS]
Service Name: {{serviceName}}
Purpose: {{purpose}}
Methods: {{methods}}
API Endpoints: {{endpoints}}
Additional Requirements:
- Implement proper error handling
- Use RxJS operators efficiently
- Include retry logic for transient failures
- Cache responses when appropriate
- Handle authentication requirements

[OUTPUT EXPECTATIONS]
Please provide:
1. Service TypeScript file with methods
2. Any required models/interfaces
3. Unit tests for the service
4. Usage example in a component
```

### `form.prompt.md`

```markdown
[ROLE]
You are an Angular expert who specializes in creating robust, user-friendly forms.

[GOAL]
Create an Angular form that follows best practices for the following requirements.

[CONTEXT]
This form will be part of a larger application that uses:
- Angular 17+
- Reactive Forms
- Custom form controls
- Comprehensive validation
- ARIA accessibility attributes

[REQUIREMENTS]
Form Name: {{formName}}
Purpose: {{purpose}}
Form Fields:
{{fields}}

Validation Rules:
{{validationRules}}

Additional Requirements:
- Show validation errors inline
- Support for disabling/enabling fields based on other inputs
- Handle form submission with loading state
- Support for form reset
- Proper keyboard navigation

[OUTPUT EXPECTATIONS]
Please provide:
1. Component TypeScript file with form setup
2. Component Template (HTML) with form controls
3. Component Styles (SCSS) for form layout
4. Custom validators if needed
5. Form submission handler
6. Unit tests for validation and submission
```

### `route-guard.prompt.md`

```markdown
[ROLE]
You are an Angular expert who specializes in route security and navigation.

[GOAL]
Create an Angular route guard that protects routes according to the following requirements.

[CONTEXT]
This guard will be part of a larger application that uses:
- Angular 17+ Router
- JWT authentication
- Role-based permissions
- NgRx for state management

[REQUIREMENTS]
Guard Name: {{guardName}}
Purpose: {{purpose}}
Protection Type:
- CanActivate
- CanActivateChild
- CanDeactivate (if needed)

Authorization Rules:
{{authorizationRules}}

Additional Requirements:
- Redirect unauthorized users to login or unauthorized page
- Handle expired tokens
- Support for role-based route protection
- Integration with authentication service

[OUTPUT EXPECTATIONS]
Please provide:
1. Guard TypeScript file
2. Any required services/interfaces
3. Unit tests for the guard
4. Example of how to use the guard in route configuration
```

## MCP Tool Examples

### Component Analyzer Tool

This tool would analyze Angular components for best practices, performance issues, and potential bugs.

```typescript
// Example implementation of a component analyzer MCP tool
server.registerTool("component-analyzer",
  {
    title: "Angular Component Analyzer",
    description: "Analyzes Angular components for best practices and potential issues",
    inputSchema: { componentPath: z.string() }
  },
  async ({ componentPath }) => {
    // Implementation would parse the component file and analyze it
    const issues = [
      // Example findings
      {
        severity: "warning",
        message: "Component is not using OnPush change detection",
        fix: "Add changeDetection: ChangeDetectionStrategy.OnPush to the component decorator"
      },
      {
        severity: "info",
        message: "Large template could affect performance",
        fix: "Consider breaking into smaller components"
      }
    ];

    return {
      content: [
        { type: "text", text: `Analysis of ${componentPath}:\n\n` },
        { type: "json", json: { issues } }
      ]
    };
  }
);
```

### Dependency Visualizer Tool

This tool would visualize the dependency graph for a given Angular service or component.

```typescript
// Example implementation of a dependency visualizer MCP tool
server.registerTool("dependency-visualizer",
  {
    title: "Angular Dependency Visualizer",
    description: "Visualizes the dependency graph for Angular services and components",
    inputSchema: { targetPath: z.string() }
  },
  async ({ targetPath }) => {
    // Implementation would analyze imports and generate a dependency graph
    const dependencies = [
      // Example dependencies
      { name: "HttpClient", type: "external" },
      { name: "AuthService", type: "internal", path: "./auth/auth.service" },
      { name: "UserModel", type: "model", path: "./models/user.model" }
    ];

    // In a real implementation, this would generate a visual graph
    return {
      content: [
        { type: "text", text: `Dependency analysis for ${targetPath}:\n\n` },
        { type: "json", json: { dependencies } }
      ]
    };
  }
);
```

These examples can be used as starting points for the workshop materials, demonstrating how to effectively use instruction files, prompt files, and MCP tools in an Angular development workflow.
