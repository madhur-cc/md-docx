# First, create a new Next.js project with TailwindCSS
npx create-next-app@latest md-to-docx --typescript --tailwind --eslint
cd md-to-docx

# Install required dependencies
npm install @shadcn/ui
npm install lucide-react

# Initialize shadcn-ui
npx shadcn-ui@latest init

# When prompted, choose these options:
# Style: Default
# Base color: Slate
# CSS variables: Yes
# Directory: @/components
# Components location: Set to default (@/components)
# Icon: lucide-react
# Prefer CSS: Yes

# Install required components
npx shadcn-ui@latest add card
npx shadcn-ui@latest add button
npx shadcn-ui@latest add textarea
