# CredilQ v2

![CredilQ Logo](frontend/credilqv2/public/Group%202.png)

A comprehensive credit management and financial tracking platform built with Next.js, designed to streamline credit assessment, loan tracking, and financial operations.

## 🚀 Features

- **Credit Assessment** - Advanced credit scoring and risk evaluation
- **Loan Tracking** - Complete loan lifecycle management
- **Invoice Management** - Streamlined billing and invoice processing
- **Sales Tracking** - Real-time sales performance monitoring
- **Utility Tracking** - Comprehensive utility management
- **Report Generation** - Automated financial reporting
- **Dashboard Analytics** - Interactive data visualization

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.9
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for data visualization
- **Forms**: React Hook Form with Zod validation
- **State Management**: React hooks and context
- **Authentication**: Custom auth implementation

## 📁 Project Structure

```
frontend/credilqv2/
├── app/                    # Next.js app directory
│   ├── dashboard/         # Dashboard pages
│   ├── login/            # Authentication pages
│   └── signup/           # User registration
├── components/           # Reusable components
│   ├── auth/            # Authentication components
│   ├── ui/              # UI primitives
│   └── *.tsx            # Feature components
├── lib/                 # Utility functions
└── public/              # Static assets
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd credilq-v2
```

2. Navigate to the frontend directory
```bash
cd frontend/credilqv2
```

3. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

4. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Key Components

- **Dashboard Home** - Central hub with key metrics and quick actions
- **Credit Assessment** - Risk evaluation and credit scoring tools
- **Loan Tracking** - Loan application and management system
- **Invoice Manager** - Billing and payment processing
- **Sales Tracking** - Sales performance and analytics
- **Report Generator** - Automated report creation and export
- **Utility Tracking** - Utility management and monitoring

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

This project uses:
- ESLint for code linting
- TypeScript for type safety
- Tailwind CSS for styling
- Prettier for code formatting (recommended)

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy with zero configuration

For other deployment options, check the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

Please follow the established code style and submit pull requests for any improvements.

---

Built with ❤️ using Next.js and modern web technologies.