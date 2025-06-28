# Agentic Coding with Angular Workshop Plan

## Workshop Overview

**Title:** Mastering Agentic Coding with Angular  
**Duration:** 90 minutes  
**Objectives:**
- Understand the concept and benefits of agentic coding
- Learn how to incrementally enhance development workflow with AI tools
- Gain practical experience developing Angular features using agentic coding
- Share insights and best practices with other developers

**Target Audience:**
- Angular developers (intermediate to advanced)
- Tech leads and engineering managers interested in AI-assisted development
- Developers looking to optimize their workflow with AI tools

**Prerequisites:**
- Experience with Angular development
- VS Code with GitHub Copilot extension installed
- Node.js and npm installed
- Git knowledge
- GitHub account

## Workshop Schedule

| Time (min) | Activity |
|------------|----------|
| 0-5        | Introduction and Setup |
| 5-15       | Presentation: Introduction to Agentic Coding |
| 15-20      | Environment Setup Check |
| 20-35      | Hands-on: Full App Development Workflow |
| 35-45      | The Iterative Development Cycle in Agentic Coding |
| 45-50      | Group Assignment and Planning |
| 50-75      | Group Activity: Feature Development |
| 75-80      | Experience Collection |
| 80-85      | Group Sharing and Discussion |
| 85-90      | Wrap-up and Next Steps |

## Content Details

### 1. Introduction to Agentic Coding (10 minutes)

**Key Concepts:**
- Definition of agentic coding: Using AI as an active collaborator in development
- Why agentic coding matters:
  - Increased productivity
  - Reduced cognitive load
  - Faster problem-solving
  - More focus on creative aspects of development
  
**Different Approaches:**
- Code completion and simple suggestions
- Code explanation
- App development with AI assistance
- Feature development through collaboration with AI

**Web-App specific Examples:**
- Component generation and structuring
- Service implementation
- Complex form validation
- State management
- Testing assistance

**Potential Risks and Challenges:**
- Over-reliance on AI-generated code without proper understanding
- Inconsistencies in generated code quality across different features
- Potential for introducing security vulnerabilities if generated code isn't properly reviewed
- Maintenance challenges when team members have different agentic coding proficiency levels
- Learning curve for effectively structuring prompts to get optimal results

### 2. Hands-on: Full App Development Workflow (15 minutes)

**Progressive Implementation for App Development:**

1. **Basic Copilot Chat Prompting**
   - Writing direct prompts in chat for quick solutions
   - Example: Creating an app architecture plan
   
   ```
   Create an architecture plan for an Angular conference management application that allows 
   organizers to create and modify conference details, including dates, location, rooms, 
   and tracks. Include component structure, service organization, and state management approach.
   ```
   
   - Limitations: Repetitive, lacks project context, not reusable across team

2. **Using Instruction Files for Project Context**
   - Extract base project information into `.instructions.md` files
   - Example: Project structure and standards instruction file
   
   ```markdown
   # Angular Conference Management Project Structure
   
   This project follows Angular best practices with the following structure:
   - Components are organized by feature in `/src/app/features/` (conferences, scheduling, rooms, speakers)
   - Shared components are in `/src/app/shared/components/` (calendar, venue-map, time-slot-picker)
   - Services are in `/src/app/core/services/` (conference-api, auth, notification)
   - Models are in `/src/app/core/models/` (conference, track, session, speaker, room)
   - State management uses NgRx
   
   ## Coding Standards
   - Use OnPush change detection
   - Follow SCSS BEM methodology for styling
   - Implement lazy loading for feature modules
   - Write unit tests for all services and components
   ```
   
   - Benefits: Provides consistent context for all prompts, improves AI response quality

3. **Using Prompt Files for Reusable Workflows**
   - Create structured prompt files for recurring development tasks
   - Example: Feature module creation prompt file
   
   ```markdown
   [ROLE]
   You are an Angular expert who specializes in creating well-structured conference management features.
   
   [GOAL]
   Create a complete Angular feature module for conference management with components, services, and state management.
   
   [REQUIREMENTS]
   - Feature name: {{featureName}} (e.g., "schedule-management", "room-allocation", "speaker-management")
   - Description: {{featureDescription}}
   - Required components: {{componentList}} (e.g., "schedule-grid", "time-slot-editor", "conflict-detector")
   - Data models: {{dataModels}} (e.g., "Conference", "Room", "TimeSlot", "Speaker", "Session")
   - API endpoints: {{apiEndpoints}} (e.g., "/api/conferences", "/api/rooms", "/api/schedule")
   
   [OUTPUT]
   1. Module structure with routing
   2. Component implementations with OnPush detection
   3. Service implementations
   4. State management setup (NgRx)
   5. Unit tests for components and services
   ```
   
   - Benefits: Standardized, reusable workflows for team members, consistent output structure

4. **Using MCP (Model Context Protocol) for Enterprise Solutions**
   - Create custom MCP tools for team-wide access and proprietary workflows
   - Example: Conference management component generator MCP tool
   
   ```json
   {
     "name": "generate-conference-component",
     "description": "Generates an Angular component for conference management features",
     "parameters": {
       "componentName": {
         "type": "string",
         "description": "Name of the component to generate"
       },
       "componentType": {
         "type": "string",
         "enum": ["conference", "schedule", "room", "track", "speaker", "session"],
         "description": "Type of conference management component to generate"
       },
       "includeCalendarIntegration": {
         "type": "boolean",
         "default": false,
         "description": "Whether to include calendar integration"
       },
       "includeDragAndDrop": {
         "type": "boolean",
         "default": false,
         "description": "Whether to include drag-and-drop functionality for scheduling"
       },
       "includeTests": {
         "type": "boolean",
         "default": true,
         "description": "Whether to include unit tests"
       }
     }
   }
   ```
   
   - Benefits: Proprietary workflows can be kept private, deeper integration with development environment, consistent across projects and teams
   - Demo: Show how the MCP tool can be invoked to generate a schedule management component

**App Development Progression Demonstration:**

1. Start with a basic architecture plan for the conference app (using Chat prompt)
2. Apply conference management project structure standards (using Instruction files)
3. Generate schedule management and room allocation feature modules (using Prompt files)
4. Create specialized components like the drag-and-drop schedule editor (using MCP tools)
5. Show the completed conference management app structure and components

**Workshop Flow:**
- Each step builds on the previous one, showing how agentic coding evolves from basic to advanced
- Participants will see how to transition from ad-hoc prompting to systematic, reusable approaches
- Emphasis on team collaboration and knowledge sharing through structured prompts
- Demonstrate how each approach improves response quality, consistency, and development speed

### 2.1. The Iterative Development Cycle in Agentic Coding (10 minutes)

**Planning, Review, and Refinement:**

Creating a complete application with agentic coding requires a structured, iterative approach beyond single prompts. This section demonstrates the full development cycle.

1. **Planning Phase**
   - **Business Design Document**: Starting with business requirements and user needs
     ```
     Create a comprehensive business design document for our conference management application, including:
     1. User personas (conference organizers, speakers, attendees) and journey maps
     2. Key business requirements (event creation, room scheduling, speaker management) and success metrics
     3. Feature prioritization based on conference organizer needs
     4. Competitive analysis against existing conference platforms
     5. User experience goals and accessibility requirements for diverse event contexts
     ```

   - **Architecture Planning**: Using AI to design system architecture based on business needs
     ```
     Based on our business design document, create a detailed architecture plan for our conference 
     management application, including:
     1. Module structure with lazy loading strategy for conference dashboard, scheduling, and administration
     2. State management approach with NgRx aligned with organizer workflows
     3. Authentication flow and security considerations for different user roles
     4. API interface design and service structure for conference data management
     ```
   
   - **Technical Specification**: Generating detailed technical specs from requirements
     ```
     Based on our user stories for the schedule management feature, create a technical specification 
     including component breakdown, service requirements, state management, and API endpoints.
     Ensure support for critical scheduling workflows like conflict detection, room capacity 
     management, and speaker availability tracking.
     ```

2. **Implementation Phase**
   - **Scaffolding**: Generate initial code structure
   - **Component Development**: Create feature components with business logic
   - **Services and State**: Implement services and state management
   - **Integration**: Connect components with services and state

3. **Review Phase**
   - **Code Review Prompts**: Using AI as a reviewer
     ```
     Review this schedule-management component implementation for:
     1. Performance issues, particularly with the calendar rendering and time slot handling
     2. Accessibility compliance for color-coded scheduling interfaces
     3. Adherence to our coding standards
     4. Potential edge cases like overlapping sessions or room double-booking
     ```
   
   - **Test Coverage Analysis**: Identify missing tests
     ```
     Analyze the test coverage for our room allocation service and suggest additional
     test cases that would improve our coverage of conflict detection, capacity constraints,
     and special equipment requirements.
     ```

4. **Refinement Phase**
   - **Performance Optimization**: Targeted improvements
     ```
     Our conference schedule calendar component is rendering slowly with large events.
     Analyze the implementation and suggest optimizations for improved rendering 
     performance when displaying hundreds of sessions across multiple tracks.
     ```
   
   - **Refactoring**: Cleaning up code
     ```
     This session management service has grown too complex with multiple scheduling
     algorithms. Suggest a refactoring approach to improve maintainability while 
     preserving all existing functionality and scheduling rules.
     ```

5. **Documentation Phase**
   - **Code Comments**: Generate meaningful comments
   - **Developer Documentation**: Create developer guides
   - **User Documentation**: Generate end-user documentation

**Key Principles:**
- Always start with adequate planning before implementation
- Use AI to review code as thoroughly as you use it to generate code
- Build refinement into your workflow, not as an afterthought
- Document continuously, not just at the end
- Create feedback loops between phases (planning insights from review, etc.)

**Demo: Iterative Development**
- Show how an initial component evolves through multiple AI interactions
- Demonstrate how feedback from review prompts improves the implementation
- Highlight how refined prompts lead to better outcomes at each stage

### 3. Group Activity: Feature Development (25 minutes)

**Setup:**
- Base Angular application with authentication and database already configured
- Each group assigned a different feature
- Access to instruction files, prompt files, and MCP server

**Feature Examples:**

1. **User Profile Management**
   - Profile edit form
   - Avatar upload
   - User preferences

2. **Data Visualization Dashboard**
   - Chart components
   - Filterable data
   - Export functionality

3. **Advanced Form with Validation**
   - Multi-step form
   - Complex validation rules
   - Dynamic form fields

4. **Admin Management Panel**
   - User management table
   - Role assignment
   - Activity logging

5. **Real-time Notification System**
   - Toast notifications
   - Notification center
   - Read/unread status management

**Activity Structure:**
- 5 minutes: Feature assignment and planning
- 30 minutes: Development using agentic coding
- 10 minutes: Experience collection

**Guidelines for Groups:**
- Use all available agentic coding techniques
- Document your process and AI interactions
- Note what worked well and what was challenging
- Prepare to share insights with the larger group

### 4. Discussion and Wrap-up (15 minutes)

**Group Sharing (10 minutes):**
- Each group presents their feature and experience (2-3 minutes each)
- Key learnings and insights

**Discussion Prompts:**
- Which agentic coding techniques were most effective?
- What Angular-specific challenges did you encounter?
- How did the AI misunderstand or exceed expectations?
- What workflows would you adopt in your daily development?

**Wrap-up (5 minutes):**
- Key takeaways
- Resources for continued learning
- Community channels for ongoing discussion

## Required Materials

### Repository Structure

```
workshop-materials/
├── README.md (setup instructions)
├── base-app/ (pre-configured Angular app)
│   ├── src/
│   ├── ...Angular files
├── examples/
│   ├── instruction-files/
│   │   ├── angular-structure.instructions.md
│   │   ├── state-management.instructions.md
│   │   ├── testing.instructions.md
│   ├── prompt-files/
│   │   ├── component.prompt.md
│   │   ├── service.prompt.md
│   │   ├── form.prompt.md
│   ├── mcp-examples/
│   │   ├── mcp.json
│   │   ├── tools/
│   │   │   ├── component-analyzer/
│   │   │   ├── dependency-visualizer/
├── features/
│   ├── user-profile/
│   │   ├── requirements.md
│   │   ├── starting-point/
│   ├── data-visualization/
│   │   ├── requirements.md
│   │   ├── starting-point/
│   ├── ...other features
```

### Example Files

#### Instruction Files

1. **Angular Project Structure:**
   - Details on component organization
   - Service structure
   - State management approach

2. **API Integration:**
   - HTTP service patterns
   - Error handling strategies
   - Authentication flow

3. **Testing Strategy:**
   - Component testing approaches
   - Service testing patterns
   - E2E testing guidance

#### Prompt Files

1. **Component Creation:**
   - Structure for generating components
   - Change detection strategy guidance
   - Documentation templates

2. **Service Implementation:**
   - Dependency injection patterns
   - Error handling
   - Retry logic

3. **Route Guard:**
   - Authentication checks
   - Permission verification
   - Redirection logic

### MCP Server Configurations

**Example MCP Tools:**

1. **Component Analyzer:**
   - Analyzes component structure
   - Suggests improvements
   - Checks for best practices

2. **Dependency Visualizer:**
   - Maps service dependencies
   - Highlights potential circular dependencies
   - Suggests optimizations

3. **Template Validator:**
   - Checks templates for accessibility
   - Suggests performance improvements
   - Identifies potential issues

## Setup Instructions

### Pre-Workshop Preparation

1. **Repository Access:**
   - Clone the workshop repository
   - Run `npm install` in the base-app directory
   - Test that the application runs locally

2. **Tool Installation:**
   - VS Code with GitHub Copilot extension
   - GitHub Copilot Chat extension
   - MCP VS Code extension

3. **Environment Requirements:**
   - Node.js 20+
   - npm 10+
   - Angular CLI 17+
   - Git

### Workshop Setup

1. **Repository Structure:**
   - Main branch: Starting point
   - Solution branches: Completed features

2. **Base App Features:**
   - Authentication (JWT)
   - User management
   - Firebase/Supabase integration
   - Basic routing and layout

## Feature Assignments

### 1. User Profile Management

**Requirements:**
- Edit form for user details
- Avatar upload with preview
- Save changes to backend
- Form validation
- Success/error notifications

**Starting Point:**
- Basic profile component
- User service with API methods
- Routes configured

### 2. Data Visualization Dashboard

**Requirements:**
- Display data using charts (ngx-charts)
- Filter controls for data selection
- Date range picker
- Export to CSV functionality

**Starting Point:**
- Dashboard component shell
- Data service with sample data
- Basic layout

### 3. Advanced Form with Validation

**Requirements:**
- Multi-step form with progress indicator
- Complex validation rules
- Save partial progress
- Form summary before submission

**Starting Point:**
- Form shell component
- Basic form structure
- Service endpoints

### 4. Admin Management Panel

**Requirements:**
- User list with pagination
- Edit user details modal
- Role assignment dropdown
- Activity log display

**Starting Point:**
- Admin component
- User service
- Role definitions

### 5. Real-time Notification System

**Requirements:**
- Toast notification component
- Notification center dropdown
- Read/unread status management
- Click to navigate to relevant item

**Starting Point:**
- Notification service
- Basic components
- WebSocket connection configured

## Facilitator Notes

### Common Issues and Solutions

1. **GitHub Copilot Setup:**
   - Ensure authentication is working
   - Check extension is properly activated

2. **MCP Configuration:**
   - Verify mcp.json is correctly set up
   - Check server connections

3. **Base App Issues:**
   - Troubleshoot common Angular errors
   - Handle authentication problems

### Discussion Facilitation

1. **Guiding Questions:**
   - "Which AI technique saved you the most time?"
   - "What surprised you about the AI's capabilities or limitations?"
   - "How would you integrate these practices into your current workflow?"

2. **Encouraging Participation:**
   - Round-robin sharing
   - Anonymous sticky note observations
   - Group synthesis

### Time Management

1. **Keeping on Schedule:**
   - Visual timers for each section
   - 5-minute warnings before transitions
   - Facilitator circulating during group work

2. **Adaptability:**
   - Parts that can be shortened if running behind
   - Extension activities if ahead of schedule

### Follow-up Resources

1. **Community:**
   - Discord/Slack channel for continued discussion
   - GitHub repo for ongoing contributions

2. **Learning Resources:**
   - Articles on agentic coding
   - Angular AI integration tools
   - Example projects

3. **Next Steps:**
   - Advanced agentic coding workshop
   - Custom MCP tool development
   - Team workflow integration strategies

## Conclusion

This workshop provides a comprehensive introduction to agentic coding with Angular, allowing participants to experience the benefits firsthand and develop practical skills they can immediately apply in their development workflows. The combination of theoretical understanding and hands-on practice ensures that participants leave with both knowledge and practical experience.
