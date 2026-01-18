import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Генерирано съдържание", value: "24", icon: Sparkles, change: "+12%" },
  { label: "Спестено време", value: "6ч", icon: Clock, change: "+8%" },
  { label: "Ангажираност", value: "4.2%", icon: TrendingUp, change: "+15%" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout
      title="Добре дошли отново"
      description="Вашият AI-задвижван маркетинг център"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Hero Card */}
        <Card className="relative overflow-hidden border-primary/20 shadow-card">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
          <CardContent className="relative p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Zap className="h-3.5 w-3.5" />
                  AI-задвижван
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Създавайте впечатляващо<br className="hidden sm:block" /> съдържание за секунди
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Генерирайте ангажиращи публикации в социалните мрежи, съобразени с вашия бизнес и аудитория. Спестете време и повишете ангажираността.
                </p>
              </div>
              <Button 
                size="lg" 
                onClick={() => navigate("/generator")}
                className="shrink-0 h-12 px-6 shadow-glow hover:shadow-[0_0_30px_hsl(239_84%_67%_/_0.4)] transition-all duration-300"
              >
                Започнете
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-card hover:shadow-card-hover transition-shadow duration-200">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Бързи действия</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2">
              <Button 
                variant="outline" 
                className="h-auto py-4 px-4 justify-start"
                onClick={() => navigate("/generator")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Ново съдържание</div>
                    <div className="text-sm text-muted-foreground">Генерирайте нова публикация</div>
                  </div>
                </div>
              </Button>
              <Button 
                variant="outline" 
                className="h-auto py-4 px-4 justify-start"
                onClick={() => navigate("/history")}
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium">Преглед на история</div>
                    <div className="text-sm text-muted-foreground">Вижте минали генерации</div>
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
