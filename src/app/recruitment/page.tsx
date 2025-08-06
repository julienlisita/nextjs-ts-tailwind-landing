// src/app/recruitment/page.tsx

import Recruitment from '@/components/pages/Recruitment';

export const metadata = {
  title: 'Recrutement',
  description:
    'Page de recrutement avec un formulaire de candidature complet (CV, lettre de motivation, message). Idéal pour les entreprises qui souhaitent recevoir des candidatures en ligne.',
  alternates: {
    canonical: 'https://www.exemple.com/recruitment',
  },
};

export default function RecruitmentPage() {
  return <Recruitment />;
}
