# Smart Library Platform 📚

A modern, full-stack web platform for managing university library operations — from student onboarding and book discovery to borrowing workflows and admin approvals — built with **Next.js**, **TypeScript**, **PostgreSQL**, and **Redis**.

[🌐 Live Demo](https://librasmart.vercel.app)

---

## Tech Stack

<p align="left">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logo=nextdotjs&logoColor=white&color=000000" alt="Next.js" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logo=typescript&logoColor=white&color=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=white&color=0EA5E9" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/-PostgreSQL-black?style=for-the-badge&logo=postgresql&logoColor=white&color=4169E1" alt="PostgreSQL" />
  <img src="https://img.shields.io/badge/-Drizzle_ORM-black?style=for-the-badge&logo=drizzle&logoColor=white&color=0F172A" alt="Drizzle ORM" />
  <img src="https://img.shields.io/badge/-Redis-black?style=for-the-badge&logo=redis&logoColor=white&color=DC382D" alt="Redis / Upstash" />
  <img src="https://img.shields.io/badge/-Auth.js-black?style=for-the-badge&logo=auth0&logoColor=white&color=000000" alt="Auth.js" />
  <img src="https://img.shields.io/badge/-ImageKit-black?style=for-the-badge&logo=imagekit&logoColor=white&color=00C4CC" alt="ImageKit" />
  <img src="https://img.shields.io/badge/-Resend-black?style=for-the-badge&logo=minutemailer&logoColor=white&color=FF4B4B" alt="Resend" />
  <img src="https://img.shields.io/badge/-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white&color=000000" alt="Vercel" />
</p>

---

## Table of Contents

- [Overview](#overview)
- [Core Features](#core-features)
- [Student / User Features](#student--user-features)
- [Admin Features](#admin-features)

---

## Overview

**Smart Library Platform** is a real-world style library system designed around a university scenario:

- Students can register, upload verification documents, browse books, and submit borrow requests.
- Admins can manage catalog data, approve/decline account requests, and control borrowing workflows.
- The platform demonstrates production-ready patterns: **App Router**, **server actions**, **Auth.js sessions**, **rate limiting**, and **typed database access** with **Drizzle ORM**.

This repository is ideal as:

- A portfolio-grade full-stack project.
- A starter template for building similar internal tools or university systems.
- A reference for integrating modern SaaS services (Auth, Email, Storage, Redis) in a Next.js app.

---

## Core Features

### Student / User Features

- 🔐 **Authentication**
    - Credentials-based sign-up and sign-in using Auth.js.
    - Protected routes with middleware and session-aware layouts.
- 🧾 **Account Requests**
    - Registration flow that includes uploading verification documents.
    - Status-aware messaging when account is pending, approved, or rejected.
- 📚 **Browse & Search Books**
    - Home page with latest books.
    - Book details view with metadata and availability status.
- 📖 **Borrowing Flow**
    - Borrow button backed by a server action.
    - Eligibility checks (e.g., maximum active loans, blocked accounts, etc.).
    - User feedback via in-app toasts for success/error states.
- 👤 **User Profile**
    - View current loans and basic account info.
    - Central entry point for user-specific actions.

### Admin Features

- 🛠 **Admin Dashboard**
    - Separate admin layout and navigation.
    - Overview of key library metrics (e.g., total books, pending requests).
- 👥 **Account Requests Management**
    - Review and approve/reject new user accounts.
    - Manage library access from a central admin interface.
- 📚 **Book Management**
    - Add and manage books in the catalog (title, author, category, etc.).
    - Update availability and other attributes as the system evolves.
- 📥 **Borrow Requests**
    - Track and manage borrow requests (approve/deny).
- 🧩 **Workflows**
    - Basic onboarding/workflow utilities implemented in `lib/workflow.ts`.
    - Extensible pattern for future admin automation.

