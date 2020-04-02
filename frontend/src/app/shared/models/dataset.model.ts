export class VirusTrackerData {
  countrydata: VirusTrackerCountryData[];
  info: VirusTrackerInfoData;
}

export class VirusTrackerCountryData {
  total_cases: number;
  total_recovered: number;
  total_unresolved: number;
  total_deaths: number;
  total_new_cases_today: number;
  total_new_deaths_today: number;
  total_active_cases: number;
  total_serious_cases: number;
}

export class VirusTrackerInfoData {
  ourid: number;
  title: string;
  code: string;
  source: string;
}
