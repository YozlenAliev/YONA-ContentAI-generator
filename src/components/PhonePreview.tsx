import { Facebook, Instagram, Linkedin, Heart, MessageCircle, Share2, MoreHorizontal, ThumbsUp, Send, Bookmark } from "lucide-react";

interface PhonePreviewProps {
  content: string;
  platform: string;
  businessName: string;
}

export function PhonePreview({ content, platform, businessName }: PhonePreviewProps) {
  const renderInstagramPost = () => (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center justify-between px-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-0.5">
            <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
              <span className="text-xs font-bold">{businessName.charAt(0)}</span>
            </div>
          </div>
          <span className="text-xs font-semibold">{businessName.toLowerCase().replace(/\s/g, '_')}</span>
        </div>
        <MoreHorizontal className="h-4 w-4" />
      </div>
      
      {/* Image placeholder */}
      <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
        <Instagram className="h-12 w-12 text-primary/40" />
      </div>
      
      {/* Actions */}
      <div className="flex items-center justify-between px-3">
        <div className="flex items-center gap-4">
          <Heart className="h-5 w-5" />
          <MessageCircle className="h-5 w-5" />
          <Send className="h-5 w-5" />
        </div>
        <Bookmark className="h-5 w-5" />
      </div>
      
      {/* Content */}
      <div className="px-3 space-y-1">
        <p className="text-xs font-semibold">1,234 харесвания</p>
        <p className="text-xs">
          <span className="font-semibold">{businessName.toLowerCase().replace(/\s/g, '_')}</span>{' '}
          <span className="whitespace-pre-wrap">{content.slice(0, 150)}{content.length > 150 ? '...' : ''}</span>
        </p>
      </div>
    </div>
  );

  const renderFacebookPost = () => (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2 px-3">
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{businessName.charAt(0)}</span>
        </div>
        <div>
          <p className="text-xs font-semibold">{businessName}</p>
          <p className="text-[10px] text-muted-foreground">Сега · 🌐</p>
        </div>
      </div>
      
      {/* Content */}
      <p className="text-xs px-3 whitespace-pre-wrap">{content.slice(0, 200)}{content.length > 200 ? '...' : ''}</p>
      
      {/* Image placeholder */}
      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
        <Facebook className="h-10 w-10 text-blue-500/40" />
      </div>
      
      {/* Reactions */}
      <div className="px-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground">
          <span>👍❤️ 128</span>
          <span>24 коментара · 12 споделяния</span>
        </div>
        <div className="border-t border-border pt-2 flex justify-around">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <ThumbsUp className="h-4 w-4" /> Харесвам
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MessageCircle className="h-4 w-4" /> Коментар
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Share2 className="h-4 w-4" /> Сподели
          </div>
        </div>
      </div>
    </div>
  );

  const renderLinkedInPost = () => (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2 px-3">
        <div className="h-10 w-10 rounded-md bg-primary/20 flex items-center justify-center">
          <span className="text-sm font-bold text-primary">{businessName.charAt(0)}</span>
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold">{businessName}</p>
          <p className="text-[10px] text-muted-foreground">1,234 последователи</p>
          <p className="text-[10px] text-muted-foreground">Сега · 🌐</p>
        </div>
      </div>
      
      {/* Content */}
      <p className="text-xs px-3 whitespace-pre-wrap">{content.slice(0, 250)}{content.length > 250 ? '...' : ''}</p>
      
      {/* Reactions */}
      <div className="px-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground border-t border-border pt-2">
          <span>👍💡❤️ 89</span>
          <span>15 коментара</span>
        </div>
        <div className="flex justify-around py-1">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <ThumbsUp className="h-4 w-4" /> Харесвам
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MessageCircle className="h-4 w-4" /> Коментар
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Share2 className="h-4 w-4" /> Сподели
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <p className="text-sm font-medium text-muted-foreground mb-3">Преглед на телефон</p>
      <div className="relative">
        {/* Phone frame */}
        <div className="w-[280px] h-[560px] bg-card rounded-[2.5rem] border-[8px] border-foreground/20 shadow-lg overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground/20 rounded-b-xl z-10" />
          
          {/* Screen content */}
          <div className="h-full pt-8 pb-4 overflow-hidden">
            <div className="h-full overflow-y-auto">
              {!content ? (
                <div className="h-full flex flex-col items-center justify-center text-muted-foreground px-6 text-center">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-4">
                    {platform === 'instagram' && <Instagram className="h-8 w-8" />}
                    {platform === 'facebook' && <Facebook className="h-8 w-8" />}
                    {platform === 'linkedin' && <Linkedin className="h-8 w-8" />}
                    {!platform && <Share2 className="h-8 w-8" />}
                  </div>
                  <p className="text-xs">Генерирайте съдържание, за да видите преглед</p>
                </div>
              ) : (
                <>
                  {platform === 'instagram' && renderInstagramPost()}
                  {platform === 'facebook' && renderFacebookPost()}
                  {platform === 'linkedin' && renderLinkedInPost()}
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground/30 rounded-full" />
      </div>
    </div>
  );
}
