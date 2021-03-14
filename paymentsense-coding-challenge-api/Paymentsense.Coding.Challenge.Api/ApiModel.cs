using Newtonsoft.Json;
using System.Collections.Generic;

namespace Paymentsense.Coding.Challenge.Api
{
    public class ResponseList<T>
    {
        [JsonProperty("meta")]
        public Meta meta { get; set; }
        [JsonProperty("data")]
        public List<T> data { get; set; }
    }
    public class Meta
    {
        [JsonProperty("total")]
        public int Total { get; set; }
    }
    public class Country
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("topLevelDomain")]
        public IList<string> TopLevelDomain { get; set; }

        [JsonProperty("alpha2Code")]
        public string Alpha2Code { get; set; }

        [JsonProperty("alpha3Code")]
        public string Alpha3Code { get; set; }

        [JsonProperty("callingCodes")]
        public IList<string> CallingCodes { get; set; }

        [JsonProperty("capital")]
        public string Capital { get; set; }

        [JsonProperty("altSpellings")]
        public IList<string> AltSpellings { get; set; }

        [JsonProperty("region")]
        public string Region { get; set; }

        [JsonProperty("subregion")]
        public string Subregion { get; set; }

        [JsonProperty("population")]
        public int Population { get; set; }

        [JsonProperty("latlng")]
        public IList<double> Latlng { get; set; }

        [JsonProperty("demonym")]
        public string Demonym { get; set; }

        [JsonProperty("area")]
        public double? Area { get; set; }

        [JsonProperty("gini")]
        public double? Gini { get; set; }

        [JsonProperty("timezones")]
        public IList<string> Timezones { get; set; }

        [JsonProperty("borders")]
        public IList<string> Borders { get; set; }

        [JsonProperty("nativeName")]
        public string NativeName { get; set; }

        [JsonProperty("numericCode")]
        public string NumericCode { get; set; }

        [JsonProperty("currencies")]
        public IList<Currency> Currencies { get; set; }

        [JsonProperty("languages")]
        public IList<Language> Languages { get; set; }

        [JsonProperty("translations")]
        public Translations Translations { get; set; }

        [JsonProperty("flag")]
        public string Flag { get; set; }

        [JsonProperty("regionalBlocs")]
        public IList<RegionalBloc> RegionalBlocs { get; set; }

        [JsonProperty("cioc")]
        public string Cioc { get; set; }
    }

    public class RegionalBloc
    {
        [JsonProperty("acronym")]
        public string Acronym { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("otherAcronyms")]
        public IList<object> OtherAcronyms { get; set; }

        [JsonProperty("otherNames")]
        public IList<string> OtherNames { get; set; }
    }

    public class Translations
    {
        [JsonProperty("de")]
        public string De { get; set; }

        [JsonProperty("es")]
        public string Es { get; set; }

        [JsonProperty("fr")]
        public string Fr { get; set; }

        [JsonProperty("ja")]
        public string Ja { get; set; }

        [JsonProperty("it")]
        public string It { get; set; }

        [JsonProperty("br")]
        public string br { get; set; }

        [JsonProperty("pt")]
        public string Pt { get; set; }

        [JsonProperty("nl")]
        public string Nl { get; set; }

        [JsonProperty("hr")]
        public string Hr { get; set; }

        [JsonProperty("fa")]
        public string Fa { get; set; }
    }

    public class Currency
    {
        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("symbol")]
        public string Symbol { get; set; }
    }
    public class Language
    {
        [JsonProperty("iso639_1")]
        public string Iso639_1 { get; set; }

        [JsonProperty("iso639_2")]
        public string Iso639_2 { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("nativeName")]
        public string NativeName { get; set; }
    }
}