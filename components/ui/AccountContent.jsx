import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import BioCard from "./BioCard";
import ManageAccountSettingsCard from "./ManageAccountSettingsCard";

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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
  };

  if (!user) return <div>Loading user data...</div>;

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-primary border-b pb-2">
        {t("accountSettings")}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <BioCard
          user={user}
          formData={formData}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
        />

        <ManageAccountSettingsCard
          user={user}
          formData={formData}
          isEditing={isEditing}
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
          handleCancel={handleCancel}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  );
};

export default AccountContent;