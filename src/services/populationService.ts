import { API_ENDPOINTS } from "@/src/constants/apiEndpoints";
import { apiFetch } from "@/src/lib/api";

export type PopulationSummary = {
  currentPopulation: number;
  birthTotal: number;
  deathTotal: number;
  moveInTotal: number;
  moveOutTotal: number;
  populationIncrease: number;
  populationDecrease: number;
  netGrowth: number;
  netChange: number;
  month?: number;
  year?: number;
  lastImported?: string;
  sumKk: number;
  sumRw: number;
  sumRt: number;
  sumDusun: number;
};

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function unwrapData(response: unknown) {
  if (isRecord(response) && response.data !== undefined) return response.data;
  return response;
}

function toNumber(value: unknown) {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : 0;
}

function toOptionalNumber(value: unknown) {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : undefined;
}

function toOptionalText(value: unknown) {
  return typeof value === "string" && value.trim() ? value : undefined;
}

function normalizePopulationSummary(data: unknown): PopulationSummary {
  const record = isRecord(data) ? data : {};

  return {
    currentPopulation: toNumber(
      record.current_population ?? record.currentPopulation,
    ),
    birthTotal: toNumber(record.birth_total ?? record.birthTotal),
    deathTotal: toNumber(record.death_total ?? record.deathTotal),
    moveInTotal: toNumber(record.move_in_total ?? record.moveInTotal),
    moveOutTotal: toNumber(record.move_out_total ?? record.moveOutTotal),
    populationIncrease: toNumber(
      record.population_increase ?? record.populationIncrease,
    ),
    populationDecrease: toNumber(
      record.population_decrease ?? record.populationDecrease,
    ),
    netGrowth: toNumber(record.net_growth ?? record.netGrowth),
    netChange: toNumber(record.net_change ?? record.netChange),
    month: toOptionalNumber(record.month),
    year: toOptionalNumber(record.year),
    lastImported: toOptionalText(record.last_imported ?? record.lastImported),
    sumKk: toNumber(record.sum_kk ?? record.sumKk),
    sumRw: toNumber(record.sum_rw ?? record.sumRw),
    sumRt: toNumber(record.sum_rt ?? record.sumRt),
    sumDusun: toNumber(record.sum_dusun ?? record.sumDusun),
  };
}

export async function getPublicPopulationSummary() {
  const response = await apiFetch<unknown>(API_ENDPOINTS.population.publicSummary);
  return normalizePopulationSummary(unwrapData(response));
}
