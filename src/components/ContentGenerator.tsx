import { useState } from "react";
import { Sparkles, Copy, Check, Loader2, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PhonePreview } from "@/components/PhonePreview";

const platforms = [
  { value: "facebook", label: "Facebook", icon: Facebook },
  { value: "instagram", label: "Instagram", icon: Instagram },
  { value: "linkedin", label: "LinkedIn", icon: Linkedin },
];

const tones = [
  { value: "professional", label: "Професионален" },
  { value: "friendly", label: "Приятелски" },
  { value: "humorous", label: "Хумористичен" },
];

const mockResponses: Record<string, Record<string, string>> = {
  professional: {
    facebook: "🎯 Издигнете своето изживяване с [Business]. Ние сме посветени на предоставянето на отлично качество и надминаване на очакванията. Посетете ни днес и открийте разликата, която качеството прави. #ПрофесионалнаУслуга #КачествотоНаПървоМясто",
    instagram: "✨ Където качеството среща експертизата.\n\nВ [Business] вярваме, че правим нещата правилно. Всеки детайл е важен, всеки клиент се брои.\n\n📍 Посетете ни днес\n💼 Изживейте разликата\n\n#ПрофесионалнаУслуга #КачественБизнес #ОтличиеВДействие",
    linkedin: "В [Business] разбираме, че успехът се гради на доверие, качество и отдаденост.\n\nНашият екип е посветен на предоставянето на изключителна стойност на всеки клиент, който обслужваме. Ние не просто правим бизнес—изграждаме трайни взаимоотношения.\n\nСвържете се с нас, за да научите как можем да подкрепим вашите цели.\n\n#БизнесОтличие #ПрофесионалниУслуги #КачествотоИмаЗначение",
  },
  friendly: {
    facebook: "Здравейте, приятели! 👋 Отбийте се при [Business] тази седмица! Ще се радваме да видим усмихнатите ви лица. Независимо дали сте редовен посетител или идвате за първи път, винаги сте добре дошли! ☀️ #ОбщностнаЛюбов #МестенБизнес",
    instagram: "Само добри вибрации! ✌️\n\nЕлате да се видим в [Business]! Имаме страхотни неща, които ви очакват, и още по-добра компания.\n\n🌟 Отбележи приятел, който има нужда от това\n❤️ До скоро!\n\n#ДобриВибрации #МестенФаворит #ОбщносттаНаПървоМясто",
    linkedin: "Вярваме, че най-добрият бизнес се гради на истински връзки! 🤝\n\nВ [Business] всяко взаимодействие е възможност да направим нечий ден малко по-светъл. Това не е просто нашата философия—това сме ние.\n\nНека се свържем и растем заедно!\n\n#ОбщностенБизнес #ИстинскиВръзки #ХоратаНаПървоМясто",
  },
  humorous: {
    facebook: "Защо клиентът избра [Business]? Защото сме най-добрите 🐐 (а също и защото сме страхотни, но главно заради козата). Елате да видите за какво е целият шум! 😄 #ЗабавниВремена #НайДобритеВГрада",
    instagram: "POV: Току-що открихте [Business] и животът ви никога няма да бъде същият 🤯\n\n(Добре, може би сме малко драматични, но сериозно, трябва да ни проверите)\n\n😂 Отбележи някой, който има нужда от тази енергия\n\n#POV #ПроменаНаИграта #ИмамеШеги",
    linkedin: "Обрат в сюжета: Следващият ви любим [бизнес тип] вече е тук. 🎬\n\nВ [Business] приемаме работата си сериозно... себе си? Не толкова.\n\nЖивотът е твърде кратък за скучен бизнес. Нека се свържем и внесем малко забавление във вашия поток!\n\n#ОбратВСюжета #БизнесСЛичност #ЗабавлениеНаРабота",
  },
};

export function ContentGenerator() {
  const [businessType, setBusinessType] = useState("");
  const [platform, setPlatform] = useState("");
  const [tone, setTone] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!businessType || !platform || !tone) {
      toast({
        title: "Липсващи полета",
        description: "Моля, попълнете всички полета преди генериране.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedContent("");

    // Simulate AI generation delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const content = mockResponses[tone]?.[platform]?.replace(/\[Business\]/g, businessType) || 
      `Страхотно съдържание за вашия ${businessType}!`;
    
    setGeneratedContent(content);
    setIsGenerating(false);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(generatedContent);
    setCopied(true);
    toast({
      title: "Копирано!",
      description: "Съдържанието е копирано в клипборда.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const selectedPlatform = platforms.find((p) => p.value === platform);

  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-fade-in">
      {/* Left side - Form and Result */}
      <div className="space-y-8">
        {/* Form Card */}
        <Card className="shadow-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <Sparkles className="h-5 w-5 text-primary" />
              Генериране на съдържание
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Business Type */}
            <div className="space-y-2">
              <Label htmlFor="business-type">Тип бизнес</Label>
              <Input
                id="business-type"
                placeholder="напр. Кафене, Фитнес студио, Адвокатска кантора"
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="bg-background"
              />
            </div>

            {/* Platform Selection */}
            <div className="space-y-2">
              <Label>Платформа</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Изберете платформа" />
                </SelectTrigger>
                <SelectContent>
                  {platforms.map((p) => (
                    <SelectItem key={p.value} value={p.value}>
                      <div className="flex items-center gap-2">
                        <p.icon className="h-4 w-4" />
                        {p.label}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tone Selection */}
            <div className="space-y-2">
              <Label>Тон на гласа</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="bg-background">
                  <SelectValue placeholder="Изберете тон" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Generate Button */}
            <Button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full h-12 text-base font-medium transition-all duration-300 hover:shadow-glow"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Генериране...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-5 w-5" />
                  Генерирай съдържание
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Result Card */}
        {generatedContent && (
          <Card className="shadow-card border-primary/20 bg-gradient-to-b from-card to-accent/30 animate-fade-in">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  {selectedPlatform && <selectedPlatform.icon className="h-5 w-5 text-primary" />}
                  Генерирано съдържание
                </CardTitle>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCopy}
                  className="transition-all duration-200"
                >
                  {copied ? (
                    <>
                      <Check className="mr-1.5 h-4 w-4 text-green-500" />
                      Копирано
                    </>
                  ) : (
                    <>
                      <Copy className="mr-1.5 h-4 w-4" />
                      Копирай
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-background p-4 whitespace-pre-wrap text-foreground leading-relaxed">
                {generatedContent}
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Right side - Phone Preview */}
      <div className="flex justify-center lg:sticky lg:top-24 lg:h-fit">
        <PhonePreview 
          content={generatedContent} 
          platform={platform} 
          businessName={businessType || "Бизнес"}
        />
      </div>
    </div>
  );
}
