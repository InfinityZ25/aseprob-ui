import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "../components/ui/card";

export default function TermsOfServicePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Card className="w-[800px] mx-auto">
        <CardHeader>
          <h2 className="text-2xl font-bold text-center">
            {t("termsOfService")}
          </h2>
        </CardHeader>
        <p>
        Making things better
        </p>
        <CardContent>
          <div className="space-y-4">
            <p>{t("termsOfServiceIntro")}</p>
            <h3 className="text-xl font-semibold">
              {t("userResponsibilities")}
            </h3>
            <p>{t("userResponsibilitiesDetails")}</p>
            <h3 className="text-xl font-semibold">
              {t("limitationsOfLiability")}
            </h3>
            <p>{t("limitationsOfLiabilityDetails")}</p>
            <h3 className="text-xl font-semibold">{t("governingLaw")}</h3>
            <p>{t("governingLawDetails")}</p>
            <h3 className="text-xl font-semibold">{t("contactUs")}</h3>
            <p>{t("contactUsDetails")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
    