import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardHeader, CardTitle } from "./card";
import { Textarea } from "./textarea";

const BioCard = ({ user, formData, isEditing, handleInputChange }) => {
  const { t } = useTranslation();

  return (
    <Card className="lg:col-span-1 shadow-lg bg-background/100 rounded-lg">
      <CardHeader className="flex flex-col items-center p-8">
        <Avatar className="w-20 h-20 mb-6 rounded-full border-2 border-primary shadow-md">
          {user.avatarUrl ? (
            <AvatarImage
              src={user.avatarUrl}
              alt={user.name}
              className="object-cover rounded-full"
            />
          ) : (
            <AvatarFallback className="text-lg font-semibold bg-muted text-muted-foreground">
              {(user.name || t("notProvided")).charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        <CardTitle className="text-2xl font-bold text-foreground mb-1">
          {user.name || t("notProvided")}
        </CardTitle>
        <p className="text-sm text-muted-foreground mb-6">
          {user.email || t("notProvided")}
        </p>
        <div className="w-full text-left">
          <h3 className="text-lg font-medium text-primary mb-2">{t("bio")}</h3>
          <div className="bg-background/100 p-4 rounded-md border border-muted-foreground shadow-inner h-full min-h-[150px]">
            {isEditing ? (
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder={t("enterYourBio")}
                className="w-full h-full min-h-[140px] resize-none text-foreground border-none rounded-md"
              />
            ) : (
              <p className="whitespace-pre-wrap break-words h-full min-h-[140px] overflow-y-auto text-foreground">
                {user.bio || t("noBioAvailable")}
              </p>
            )}
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default BioCard;
