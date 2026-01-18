import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const mockHistory = [
  {
    id: 1,
    business: "Изгрев Кафе",
    platform: "instagram",
    tone: "Приятелски",
    date: "преди 2 часа",
    preview: "Само добри вибрации! ✌️ Елате да се видим в Изгрев Кафе!",
  },
  {
    id: 2,
    business: "Елит Фитнес",
    platform: "linkedin",
    tone: "Професионален",
    date: "Вчера",
    preview: "В Елит Фитнес разбираме, че успехът се гради на доверие...",
  },
  {
    id: 3,
    business: "Щастливи Лапи Ветеринарна клиника",
    platform: "facebook",
    tone: "Хумористичен",
    date: "преди 3 дни",
    preview: "Защо клиентът избра Щастливи Лапи? Защото сме най-добрите 🐐",
  },
];

const platformIcons = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
};

const History = () => {
  return (
    <DashboardLayout
      title="История на съдържанието"
      description="Прегледайте предишно генерирано съдържание"
    >
      <div className="space-y-4 animate-fade-in">
        {mockHistory.length > 0 ? (
          mockHistory.map((item) => {
            const PlatformIcon = platformIcons[item.platform as keyof typeof platformIcons];
            return (
              <Card key={item.id} className="shadow-card hover:shadow-card-hover transition-shadow duration-200">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base font-medium flex items-center gap-2">
                      <PlatformIcon className="h-4 w-4 text-primary" />
                      {item.business}
                    </CardTitle>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {item.date}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{item.preview}</p>
                  <div className="mt-2">
                    <span className="inline-flex items-center rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      {item.tone}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card className="shadow-card">
            <CardContent className="flex flex-col items-center justify-center py-12 text-center">
              <Clock className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium text-foreground">Все още няма история</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Генерираното съдържание ще се появи тук
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default History;
