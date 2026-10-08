# CloudWait AI

A cloud-based queue intelligence dashboard for predicting student waiting times in real time.

## Overview
CloudWait AI helps students and administrators estimate wait times before they stand in a queue. The app combines live queue data, historical patterns, and AI-powered prediction models to surface guidance such as:

- estimated wait time
- confidence score
- expected service completion time
- best time to visit
- queue health monitoring
- recommended counter allocation

## Features
- Live queue status dashboard
- AI wait-time prediction simulation
- Peak/off-peak analysis
- Admin overview with queue health metrics
- Counter outage scenario handling
- Responsive UI built with Next.js + Tailwind CSS

## Stack
- Next.js 16
- TypeScript
- Tailwind CSS
- Framer Motion
- Firebase-ready architecture

## Local setup
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build
```bash
npm run build
npm run start
```

## Project structure
```bash
app/
components/
public/
```

## Notes
This repository includes a working UI prototype and queue simulation aligned with the CloudWait AI concept described in the project brief.
