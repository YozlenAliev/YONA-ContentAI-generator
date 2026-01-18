import { DashboardLayout } from "@/components/DashboardLayout";
import { ContentGenerator } from "@/components/ContentGenerator";

const Generator = () => {
  return (
    <DashboardLayout
      title="AI Генератор"
      description="Създайте ангажиращо съдържание за вашия бизнес"
    >
      <ContentGenerator />
    </DashboardLayout>
  );
};

export default Generator;
