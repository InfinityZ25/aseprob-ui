import React from "react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Card, CardHeader, CardTitle } from "./card";
import { Textarea } from "./textarea";

const BioCard = ({ user, formData, isEditing, handleInputChange }) => {
  const { t } = useTranslation();

  return (
    <Card className="lg:col-span-1 shadow-lg bg-background/100">
      <CardHeader className="text-center flex flex-col items-center p-6">
        <Avatar className="w-32 h-32 mb-4">
          {user.avatarUrl ? (
            <AvatarImage src={user.avatarUrl} alt={user.name} />
          ) : (
            <AvatarFallback>
              {(user.name || t("notProvided")).charAt(0)}
            </AvatarFallback>
          )}
        </Avatar>
        <CardTitle className="text-2xl mb-2 text-foreground">
          {user.name || t("notProvided")}
        </CardTitle>
        <p className="text-muted-foreground mb-6">
          {user.email || t("notProvided")}
        </p>
        <div className="w-full text-left">
          <h3 className="text-xl font-semibold mb-3 text-primary">
            {t("bio")}
          </h3>
          <div className="bg-background/100 p-4 rounded-md mb-4 h-full min-h-[200px]">
            {isEditing ? (
              <Textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                placeholder={t("enterYourBio")}
                className="w-full h-full min-h-[180px] resize-none text-foreground"
              />
            ) : (
              <p className="whitespace-pre-wrap break-words h-full min-h-[180px] overflow-y-auto text-foreground">
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