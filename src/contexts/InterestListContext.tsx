import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";
import { useSettings } from "./SettingsContext";

export interface InterestItem {
  id: string;
  nameAr: string;
  nameEn: string;
  categoryAr: string;
  categoryEn: string;
  image?: string;
}

interface InterestListContextType {
  items: InterestItem[];
  addItem: (item: InterestItem) => void;
  removeItem: (id: string) => void;
  clearList: () => void;
  isInterestListOpen: boolean;
  setIsInterestListOpen: (isOpen: boolean) => void;
}

const InterestListContext = createContext<InterestListContextType | undefined>(undefined);

export const InterestListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InterestItem[]>([]);
  const [isInterestListOpen, setIsInterestListOpen] = useState(false);
  const { t } = useSettings();

  const addItem = (item: InterestItem) => {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
    
    toast.success(
      t("تمت الإضافة إلى قائمة الاهتمام", "Added to Interest List") as string,
      {
        action: {
          label: t("عرض قائمة الاهتمام", "View Interest List") as string,
          onClick: () => setIsInterestListOpen(true)
        }
      }
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <InterestListContext.Provider value={{ items, addItem, removeItem, clearList, isInterestListOpen, setIsInterestListOpen }}>
      {children}
    </InterestListContext.Provider>
  );
};

export const useInterestList = () => {
  const context = useContext(InterestListContext);
  if (!context) throw new Error("useInterestList must be used within InterestListProvider");
  return context;
};
