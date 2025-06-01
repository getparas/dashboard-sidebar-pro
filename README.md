# Dashboard Sidebar Pro

A modern, customizable sidebar component built with Next.js, TypeScript, Shadcn UI, Framer Motion. Features collapsible functionality, smooth animations, and routing integration for dashboard applications.

## ✨ Features

- **🎨 Modern Design**: Built with Shadcn UI components for a polished, professional look
- **📱 Responsive**: Fully responsive design that works on all screen sizes
- **🔄 Collapsible**: Sidebar collapses to show only icons on smaller screens or when toggled
- **🎭 Smooth Animations**: Powered by Framer Motion for fluid transitions and interactions
- **🧭 Routing Integration**: Built-in Next.js routing with active state management
- **🌙 Theme Support**: Light/dark mode toggle with system preference detection
- **♿ Accessible**: ARIA-compliant with keyboard navigation support
- **📦 TypeScript**: Fully typed for better development experience
- **🎯 Active States**: Visual indicators for current page/section
- **🔧 Customizable**: Easy to modify and extend for your specific needs

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/dashboard-sidebar-component.git
   cd dashboard-sidebar-component
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install

   # or

   yarn install

   # or

   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev

   # or

   yarn dev

   # or

   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 Usage

### Basic Implementation

The sidebar component is designed to be plug-and-play. Here's how to use it in your own project:

1. **Wrap your app with the DashboardLayout**:
   \`\`\`tsx
   import { DashboardLayout } from "@/components/dashboard-layout"

   export default function YourPage() {
   return (
   <DashboardLayout>
   <div className="p-4">
   <h1>Your Content Here</h1>
   </div>
   </DashboardLayout>
   )
   }
   \`\`\`

2. **Customize navigation items** in \`components/app-sidebar.tsx\`:
   \`\`\`tsx
   const navigationItems = [
   {
   title: "Dashboard",
   url: "/",
   icon: Home,
   description: "Overview and main dashboard"
   },
   // Add your own navigation items
   ]
   \`\`\`

### Customization Options

#### Adding New Navigation Items

1. Import your desired Lucide React or Iconsax React Icon
2. Add the item to the \`navigationItems\` array
3. Create the corresponding page in the \`app/\` directory

#### Styling Customization

The component uses Tailwind CSS and CSS variables for theming. You can customize:

- **Colors**: Modify the CSS variables in \`globals.css\`
- **Animations**: Adjust Framer Motion configurations in \`app-sidebar.tsx\`
- **Layout**: Modify spacing and sizing in the component files

#### Animation Customization

Framer Motion animations can be customized by modifying the motion components:

\`\`\`tsx
<motion.div
whileHover={{ x: 2 }}
transition={{ type: "spring", stiffness: 400, damping: 25 }}

> {/_ Your content _/}
> </motion.div>
> \`\`\`

## 📱 Responsive Behavior

- **Desktop (≥768px)**: Full sidebar with text labels
- **Tablet/Mobile (<768px)**: Collapsible overlay sidebar
- **Icon Mode**: Sidebar collapses to show only icons with tooltips

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **High Contrast**: Supports system high contrast modes
- **Reduced Motion**: Respects user's motion preferences

## 🎨 Theming

The component supports both light and dark themes with automatic system detection:

- **Light Theme**: Clean, minimal design with subtle shadows
- **Dark Theme**: Dark background with appropriate contrast ratios
- **System Theme**: Automatically matches user's system preference

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Follow the existing code style and conventions
2. Add TypeScript types for new features
3. Include appropriate tests for new functionality
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding! 🚀**
\`\`\`
