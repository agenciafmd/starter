# GitHub Copilot Custom Instructions for Laravel 12 & PHP 8.2/8.4

These instructions guide Copilot to generate code that aligns with modern Laravel 12 standards, PHP 8.2/8.4 features, software engineering principles, and industry best practices to improve software quality, maintainability, and security.

## General Coding Standards

- Always use `declare(strict_types=1);` at the top of PHP files.
- Follow **PSR-12** coding style and structure.
- Prefer short, expressive, and readable code.
- Use **meaningful, descriptive variable, function, class, and file names**.
- Apply proper PHPDoc blocks for classes, methods, and complex logic.
- Organize code into small, reusable functions or classes with single responsibility.
- Avoid magic numbers or hard-coded strings; use constants or config files.

## PHP 8.2/8.4 Best Practices

- Use **readonly properties** to enforce immutability where applicable.
- Use **Enums** instead of string or integer constants.
- Use **First-class callable syntax** for callbacks.
- Leverage **Constructor Property Promotion**.
- Use **Union Types**, **Intersection Types**, and **true/false return types** for strict typing.
- Apply **Static Return Type** where needed.
- Use the **Nullsafe Operator (?->)** for optional chaining.
- Adopt **final classes** where extension is not intended.
- Use **Named Arguments** for improved clarity when calling functions with multiple parameters.

## Laravel 12 Project Structure & Conventions

- Follow the official Laravel project structure:
  - `app/Http/Controllers` - Controllers
  - `app/Models` - Eloquent models
  - `app/Http/Requests` - Form request validation
  - `app/Http/Resources` - API resource responses
  - `app/Enums` - Enums
  - `app/Services` - Business logic
  - `app/Data` - Data Transfer Objects (DTOs)
  - `app/Actions` - Single-responsibility action classes
  - `app/Policies` - Authorization logic

- Controllers must:
  - Be thin.
  - Use dependency injection.
  - Use Form Requests for validation.
  - Return typed responses (e.g., `JsonResponse`).
  - Use Resource classes for API responses.

- Business logic should reside in:
  - Service classes
  - Action classes
  - Event listeners or Jobs for asynchronous tasks

## Eloquent ORM & Database

- Use **Eloquent Models** with proper `$fillable` or `$guarded` attributes for mass assignment protection.
- Use **casts** for date, boolean, JSON, and custom data types.
- Apply **accessors & mutators** for attribute transformation.
- Avoid direct raw SQL unless absolutely necessary; prefer Eloquent or Query Builder.
- Migrations:
  - Always use migrations for schema changes.
  - Include proper constraints (foreign keys, unique indexes, etc.).

## API Development

- Use **API Resource classes** for consistent and structured JSON responses.
- Apply **route model binding** where possible.
- Use Form Requests for input validation.
- Adhere to proper HTTP status codes (200, 201, 204, 400, 422, 500, etc.).

## Blade & Frontend (if applicable)

- Keep Blade templates clean and logic-free; use View Composers or dedicated View Models for complex data.
- Use `@props`, `@aware`, `@once` Blade features appropriately.
- Use Alpine.js or Livewire for interactive frontend logic (optional).

## Security Best Practices

- Never trust user input; always validate and sanitize inputs.
- Use prepared statements via Eloquent or Query Builder to prevent SQL injection.
- Use Laravel's built-in CSRF, XSS, and validation mechanisms.
- Store sensitive information in `.env`, never hard-code secrets.
- Apply proper authorization checks using Policies or Gates.
- Follow the principle of the least privilege for users, roles, and permissions.

## Testing Standards

- Prefer **Pest PHP** with clear, human-readable test names.
- Use **factories** for test data setup.
- Include feature tests for user-facing functionality.
- Include unit tests for business logic, services, and helper classes.
- Mock external services using Laravel's `Http::fake()` or equivalent.
- Maintain high code coverage but focus on meaningful tests over 100% coverage obsession.

## Software Quality & Maintainability

- Follow **SOLID Principles**:
  - Single Responsibility Principle (SRP)
  - Open/Closed Principle (OCP)
  - Liskov Substitution Principle (LSP)
  - Interface Segregation Principle (ISP)
  - Dependency Inversion Principle (DIP)

- Follow **DRY** (Don't Repeat Yourself) and **KISS** (Keep It Simple, Stupid) principles.
- Apply **YAGNI** (You Aren't Going to Need It) to avoid overengineering.
- Document complex logic with PHPDoc and inline comments.

## Performance & Optimization

- Eager load relationships to avoid N+1 queries.
- Use caching with Laravel's Cache system for frequently accessed data.
- Paginate large datasets using `paginate()` instead of `get()`.
- Queue long-running tasks using Laravel Queues.
- Optimize database indexes for common queries.

## Modern Laravel Features to Use

- Use **Job batching** for complex queue workflows.
- Use **Event Broadcasting** if real-time updates are needed.
- Use **Laravel Scout** and **Full-text search** if search functionality is required.
- Use **Rate Limiting** for API routes.
- Consider **Laravel Vapor** or **Octane** for serverless or high-performance applications (optional).

## Additional Copilot Behavior Preferences

- Generate **strictly typed**, modern PHP code using latest language features.
- Prioritize **readable, clean, maintainable** code over cleverness.
- Avoid legacy or deprecated Laravel patterns (facade overuse, logic-heavy views, etc.).
- Suggest proper class placement based on Laravel directory structure.
- Suggest tests alongside new features where applicable.
- Default to **immutability**, **dependency injection**, and **encapsulation** best practices.
