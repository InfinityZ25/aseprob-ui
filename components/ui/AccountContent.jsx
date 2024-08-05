import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { cn, formatPhoneNumber } from "../../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import { Switch } from "./switch";
import { Textarea } from "./textarea";

const AccountContent = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    language: "",
    timezone: "",
    notifications: false,
    twoFactorAuth: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setUser(userData);
      setFormData({
        name: userData.name || t("notProvided"),
        email: userData.email || t("notProvided"),
        phone: userData.phone || t("notProvided"),
        bio: userData.bio || "",
        language: userData.language || t("notSelected"),
        timezone: userData.timezone || t("notSelected"),
        notifications: userData.notifications || false,
        twoFactorAuth: userData.twoFactorAuth || false,
      });
    }
  }, [t]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "phone") {
      const formattedPhone = formatPhoneNumber(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedPhone,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({ ...user });
    setIsEditing(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = { ...user, ...formData };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setIsEditing(false);
    toast.success(t("userDataUpdatedSuccessfully"));
  };

  if (!user) return <div>Loading user data...</div>;

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-2">
        {t("accountSettings")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

        <Card className="lg:col-span-2 shadow-lg bg-background/100">
          <CardHeader className="p-6">
            <CardTitle className="text-3xl font-semibold mb-2 text-primary">
              {t("manageAccountSettings")}
            </CardTitle>
            <p className="text-muted-foreground text-lg">
              {t("manageAccountSettingsDescription")}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {["name", "email", "phone"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label
                      htmlFor={field}
                      className="text-sm font-medium text-primary"
                    >
                      {t(field)}
                    </Label>
                    {isEditing ? (
                      <Input
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={t(
                          `example${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }`
                        )}
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        className="w-full shadow-sm text-foreground"
                        maxLength={field === "phone" ? 14 : undefined}
                      />
                    ) : (
                      <p className="text-foreground">
                        {user[field] || t("notProvided")}
                      </p>
                    )}
                  </div>
                ))}

                {["language", "timezone"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label
                      htmlFor={field}
                      className="text-sm font-medium text-primary"
                    >
                      {t(field)}
                    </Label>
                    {isEditing ? (
                      <Select
                        id={field}
                        name={field}
                        value={formData[field]}
                        onValueChange={(value) =>
                          handleInputChange({
                            target: { name: field, value },
                          })
                        }
                      >
                        <SelectTrigger className="w-full bg-background/100 text-foreground border border-input shadow-sm focus:ring-2 focus:ring-primary">
                          <SelectValue
                            placeholder={t(
                              `select${
                                field.charAt(0).toUpperCase() + field.slice(1)
                              }`
                            )}
                          />
                        </SelectTrigger>
                        <SelectContent className="bg-background/100 border border-input shadow-lg max-h-[200px] overflow-y-auto">
                          {field === "language" ? (
                            <>
                              <SelectItem
                                value="en"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                English
                              </SelectItem>
                              <SelectItem
                                value="es"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                Español
                              </SelectItem>
                              <SelectItem
                                value="fr"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                Français
                              </SelectItem>
                              <SelectItem
                                value="de"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                Deutsch
                              </SelectItem>
                              <SelectItem
                                value="it"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                Italiano
                              </SelectItem>
                              <SelectItem
                                value="pt"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                Português
                              </SelectItem>
                              <SelectItem
                                value="ru"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                Русский
                              </SelectItem>
                              <SelectItem
                                value="zh"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                中文
                              </SelectItem>
                              <SelectItem
                                value="ja"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                日本語
                              </SelectItem>
                              <SelectItem
                                value="ko"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                한국어
                              </SelectItem>
                            </>
                          ) : (
                            <>
                              <SelectItem
                                value="UTC"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                UTC
                              </SelectItem>
                              <SelectItem
                                value="GMT"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                GMT (London)
                              </SelectItem>
                              <SelectItem
                                value="EST"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                EST (New York)
                              </SelectItem>
                              <SelectItem
                                value="CST"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                CST (Chicago)
                              </SelectItem>
                              <SelectItem
                                value="MST"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                MST (Denver)
                              </SelectItem>
                              <SelectItem
                                value="PST"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                PST (Los Angeles)
                              </SelectItem>
                              <SelectItem
                                value="IST"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                IST (Mumbai)
                              </SelectItem>
                              <SelectItem
                                value="JST"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                JST (Tokyo)
                              </SelectItem>
                              <SelectItem
                                value="AEDT"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                AEDT (Sydney)
                              </SelectItem>
                              <SelectItem
                                value="CET"
                                className="text-foreground hover:bg-highlight hover:bg-opacity-90"
                              >
                                CET (Paris)
                              </SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    ) : (
                      <p className="text-foreground">
                        {user[field] || t("notSelected")}
                      </p>
                    )}
                  </div>
                ))}

                {["notifications", "twoFactorAuth"].map((field) => (
                  <div key={field} className="space-y-2">
                    <Label
                      htmlFor={field}
                      className="flex items-center justify-between text-foreground"
                    >
                      {t(field)}
                      {isEditing ? (
                        <Switch
                          id={field}
                          name={field}
                          checked={formData[field]}
                          onCheckedChange={(checked) =>
                            handleInputChange({
                              target: { name: field, value: checked },
                            })
                          }
                          className={cn(
                            "data-[state=checked]:bg-green-500",
                            "data-[state=unchecked]:bg-gray-200",
                            "shadow-sm",
                            "[&>span]:bg-white [&>span]:shadow-md [&>span]:w-5 [&>span]:h-5",
                            "[&>span]:shadow-gray-400/50 [&>span]:ring-2 [&>span]:ring-white"
                          )}
                        />
                      ) : (
                        <span
                          className={`text-sm ${
                            user[field] ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {user[field] ? t("enabled") : t("disabled")}
                        </span>
                      )}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                {isEditing ? (
                  <>
                    <Button
                      type="button"
                      variant="outline"
                      className="shadow-md"
                      onClick={handleCancel}
                    >
                      {t("cancel")}
                    </Button>
                    <Button type="submit" className="shadow-md">
                      {t("save")}
                    </Button>
                  </>
                ) : (
                  <Button
                    type="button"
                    className="shadow-md"
                    onClick={handleEdit}
                  >
                    {t("edit")}
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default AccountContent;