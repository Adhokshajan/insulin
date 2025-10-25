# Automated Insulin Device Dashboard

A modern React dashboard for monitoring and controlling an automated insulin delivery device. Built with Vite, React, TailwindCSS, and Recharts.

## Features

- **Real-time Glucose Monitoring**: Visual display of current blood glucose levels with status indicators
- **Insulin Dosage Tracking**: Circular progress indicator showing remaining insulin levels
- **Interactive Charts**: Historical glucose and insulin data visualization using Recharts
- **Smart Controls**: Administer insulin button with safety checks and loading states
- **Responsive Design**: Clean, minimal UI that works on all device sizes
- **Status Monitoring**: Device health, battery level, and system status indicators

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Main header with device status
│   ├── GlucoseCard.jsx     # Blood glucose level display
│   └── DosageChart.jsx     # Historical data charts
├── App.jsx                 # Main dashboard component
├── main.jsx               # React entry point
└── index.css              # TailwindCSS imports
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **PostCSS** - CSS processing

## Key Components

### Header Component
- Device title and status indicator
- Online/offline status with animated indicator
- Clean, professional layout

### GlucoseCard Component
- Large circular glucose level display
- Color-coded status (Low/Normal/High)
- Reference ranges for glucose levels
- Real-time timestamp

### DosageChart Component
- Interactive line chart showing glucose and insulin trends
- Custom tooltips with detailed information
- Dual y-axis for different metrics
- Summary statistics

### Main Dashboard
- Responsive grid layout
- Interactive insulin administration
- Safety checks and loading states
- Status cards for device monitoring

## Customization

The dashboard uses a custom color palette defined in `tailwind.config.js`:
- `insulin-blue`: Primary blue for insulin-related elements
- `glucose-green`: Green for normal glucose levels
- `warning-orange`: Orange for high glucose warnings
- `danger-red`: Red for low glucose alerts

## Safety Features

- Insulin administration requires minimum 20% insulin level
- Visual warnings for low insulin levels
- Loading states during administration
- Color-coded glucose status indicators

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

The project uses ESLint for code quality. Run `npm run lint` to check for issues.

## License

This project is for educational and demonstration purposes.
