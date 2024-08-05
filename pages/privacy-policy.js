import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "../components/ui/card";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="w-[800px] mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">
            {t("privacyPolicy")}
          </h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p>{t("privacyPolicyIntro")}</p>

            <h3 className="text-xl font-semibold">
              {t("informationWeCollect")}
            </h3>
            <p>{t("informationWeCollectDetails")}</p>

            <h3 className="text-xl font-semibold">
              {t("howWeUseInformation")}
            </h3>
            <p>{t("howWeUseInformationDetails")}</p>

            <h3 className="text-xl font-semibold">{t("informationSharing")}</h3>
            <p>{t("informationSharingDetails")}</p>

            <h3 className="text-xl font-semibold">{t("dataSecurity")}</h3>
            <p>{t("dataSecurityDetails")}</p>

            <h3 className="text-xl font-semibold">{t("yourRights")}</h3>
            <p>{t("yourRightsDetails")}</p>

            <h3 className="text-xl font-semibold">{t("cookiesAndTracking")}</h3>
            <p>{t("cookiesAndTrackingDetails")}</p>

            <h3 className="text-xl font-semibold">
              {t("changesToThisPolicy")}
            </h3>
            <p>{t("changesToThisPolicyDetails")}</p>

            <h3 className="text-xl font-semibold">{t("contactUs")}</h3>
            <p>{t("contactUsDetails")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
