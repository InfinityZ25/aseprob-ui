import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "../../lib/utils";
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

const ManageAccountSettingsCard = ({
  user,
  formData,
  isEditing,
  handleInputChange,
  handleEdit,
  handleCancel,
  handleSubmit,
}) => {
  const { t } = useTranslation();
  const [openDropdowns, setOpenDropdowns] = useState({
    language: false,
    timezone: false,
  });

  return (
    <Card className="lg:col-span-2 shadow-lg bg-background">
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
                      `example${field.charAt(0).toUpperCase() + field.slice(1)}`
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
                    open={openDropdowns[field]}
                    onOpenChange={(open) =>
                      setOpenDropdowns((prev) => ({ ...prev, [field]: open }))
                    }
                  >
                    <SelectTrigger className="w-full bg-background text-foreground border border-input shadow-sm focus:ring-2 focus:ring-primary">
                      <SelectValue
                        placeholder={t(
                          `select${
                            field.charAt(0).toUpperCase() + field.slice(1)
                          }`
                        )}
                      />
                    </SelectTrigger>
                    <SelectContent className="bg-white dark:bg-gray-800 text-foreground border border-gray-200 dark:border-gray-600 shadow-lg max-h-[200px] overflow-y-auto">
                      {field === "language" ? (
                        <>
                          <SelectItem
                            value="en"
                            className="text-foreground hover:bg-accent dark:hover:bg-accent-dark"
                          >
                            English
                          </SelectItem>
                          <SelectItem
                            value="es"
                            className="text-foreground hover:bg-accent dark:hover:bg-accent-dark"
                          >
                            Español
                          </SelectItem>
                          <SelectItem
                            value="fr"
                            className="text-foreground hover:bg-accent dark:hover:bg-accent-dark"
                          >
                            Français
                          </SelectItem>
                          <SelectItem
                            value="de"
                            className="text-foreground hover:bg-accent dark:hover:bg-accent-dark"
                          >
                            Deutsch
                          </SelectItem>
                          <SelectItem
                            value="it"
                            className="text-foreground hover:bg-accent dark:hover:bg-accent-dark"
                          >
                            Italiano
                          </SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem
                            value="UTC"
                            className="text-foreground hover:bg-accent dark:hover:bg-accent-dark"
                          >
                            UTC
                          </SelectItem>
                          {/* Add other timezone options */}
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
              <Button type="button" className="shadow-md" onClick={handleEdit}>
                {t("edit")}
              </Button>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ManageAccountSettingsCard;
