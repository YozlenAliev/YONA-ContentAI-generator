import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User, Bell, Shield } from "lucide-react";

const Settings = () => {
  return (
    <DashboardLayout
      title="Настройки"
      description="Управлявайте вашия акаунт и предпочитания"
    >
      <div className="space-y-6 animate-fade-in">
        {/* Profile Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Профил
            </CardTitle>
            <CardDescription>Управлявайте информацията за вашия профил</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Име на бизнеса</Label>
                <Input id="name" placeholder="Името на вашия бизнес" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Имейл</Label>
                <Input id="email" type="email" placeholder="вие@пример.com" className="bg-background" />
              </div>
            </div>
            <Button className="mt-2">Запази промените</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Известия
            </CardTitle>
            <CardDescription>Конфигурирайте как получавате известия</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Имейл известия</Label>
                <p className="text-sm text-muted-foreground">Получавайте актуализации по имейл</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Седмичен бюлетин</Label>
                <p className="text-sm text-muted-foreground">Получавайте обобщение на представянето на съдържанието ви</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Сигурност
            </CardTitle>
            <CardDescription>Управлявайте вашите настройки за сигурност</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Двуфакторна автентикация</Label>
                <p className="text-sm text-muted-foreground">Добавете допълнителен слой сигурност</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
