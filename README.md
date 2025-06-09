# Fitness Application

A comprehensive fitness application with a Next.js frontend and Python Flask backend to help users track workouts, calculate BMI, manage calories, and follow meal plans.

## Project Structure

```
├── Backend/          # Python Flask backend
│   ├── app.py        # Main Flask application
│   ├── listofexercises.py # Exercise definitions and logic
│   ├── audiofiles/   # Audio prompts for exercises
│   ├── static/       # CSS and static assets
│   └── templates/    # HTML templates for Flask routes
│
└── Frontend/         # Next.js frontend application
    ├── app/          # Next.js App Router
    ├── components/   # React components
    ├── hooks/        # Custom React hooks
    ├── lib/          # Utility functions
    └── public/       # Static assets including exercise images
```

## Features

- **Exercise Tracking**: Real-time exercise detection and guidance
- **BMI Calculator**: Calculate and track your Body Mass Index
- **Calorie Counter**: Monitor your daily caloric intake
- **Meal Plans**: Access healthy meal plans and recipes
- **Interactive UI**: Modern, responsive interface built with Next.js and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v16+)
- Python (v3.9+)
- Docker (optional, for containerized backend)

### Frontend Setup

1. Navigate to the Frontend directory:
   ```
   cd Frontend
   ```

2. Install dependencies:
   ```
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Backend Setup

1. Navigate to the Backend directory:
   ```
   cd Backend
   ```

2. Create and activate a virtual environment (optional but recommended):
   ```
   python -m venv venv
   # On Windows
   .\venv\Scripts\activate
   # On Unix or MacOS
   source venv/bin/activate
   ```

3. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

4. Run the Flask application:
   ```
   python app.py
   ```

   The API will be available at [http://localhost:5000](http://localhost:5000).

### Docker Setup (Alternative for Backend)

1. Navigate to the Backend directory:
   ```
   cd Backend
   ```

2. Build and run with Docker Compose:
   ```
   docker-compose up
   ```

## Technologies Used

### Frontend
- **Next.js**: React framework for building the UI
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible UI components
- **React Hooks**: For state management

### Backend
- **Flask**: Python web framework
- **Docker**: Containerization for easy deployment
- **Audio Processing**: For exercise cues and guidance

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
 details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Flask](https://flask.palletsprojects.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
