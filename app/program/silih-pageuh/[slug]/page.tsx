import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import AkarDesa, {
  akarDesaMeta,
} from "@/src/components/program/silih-pageuh/detail/AkarDesa";
import BatangKayu, {
  batangKayuMeta,
} from "@/src/components/program/silih-pageuh/detail/BatangKayu";
import RindangPangan, {
  rindangPanganMeta,
} from "@/src/components/program/silih-pageuh/detail/RindangPangan";
import TunasSehat, {
  tunasSehatMeta,
} from "@/src/components/program/silih-pageuh/detail/TunasSehat";

type SubprogramPageProps = {
  params: Promise<{ slug: string }>;
};

type DetailPageDefinition = {
  Component: ComponentType;
  metadata: {
    title: string;
    description: string;
  };
};

const detailPages = {
  "akar-desa": {
    Component: AkarDesa,
    metadata: akarDesaMeta,
  },
  "rindang-pangan": {
    Component: RindangPangan,
    metadata: rindangPanganMeta,
  },
  "tunas-sehat": {
    Component: TunasSehat,
    metadata: tunasSehatMeta,
  },
  "batang-kayu": {
    Component: BatangKayu,
    metadata: batangKayuMeta,
  },
} satisfies Record<string, DetailPageDefinition>;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(detailPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SubprogramPageProps) {
  const { slug } = await params;
  const detailPage = detailPages[slug as keyof typeof detailPages];

  if (!detailPage) {
    return {
      title: "Subprogram Silih Pageuh",
    };
  }

  return detailPage.metadata;
}

export default async function SilihPageuhSubprogramPage({
  params,
}: SubprogramPageProps) {
  const { slug } = await params;
  const detailPage = detailPages[slug as keyof typeof detailPages];

  if (!detailPage) {
    notFound();
  }

  const Component = detailPage.Component;

  return <Component />;
}
