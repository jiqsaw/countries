using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using static Paymentsense.Coding.Challenge.Api.Variables;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{
    [Route("countries")]
    [ApiController]
    public class PaymentsenseCodingChallengeController : ControllerBase
    {
        private static readonly RestClient client = new RestClient();

        [HttpGet]
        public async Task<ResponseList<Country>> GetAllCountriesAsync(int? page, int? limit, string q, string code)
        {
            var request = new RestRequest(
                $"{API}{API_ALL}",
                Method.GET,
                DataFormat.Json);
            IRestResponse response = await client.ExecuteGetTaskAsync(request);
            if (response.IsSuccessful && response.StatusCode.HasFlag(HttpStatusCode.OK))
            {
                JArray jsonArray = JArray.Parse(response.Content);
                ResponseList<Country> res = new ResponseList<Country>();
                res.data = jsonArray.ToObject<List<Country>>();
                res.meta = new Meta();

                if (!String.IsNullOrEmpty(q))
                {
                    res.data = res.data.FindAll(e => e.Name.IndexOf(q) != -1);
                }

                res.meta.Total = res.data.Count;

                if (limit != null && page != null && (page * limit <= res.data.Count))
                {
                    res.data = res.data.GetRange((page.Value * limit.Value) - 1, limit.Value);
                }
                return res;
            }
            
            throw new Exception("No country found");
        }

        [HttpGet("{code}")]
        public async Task<Country> GetCountryByCodeAsync(string code)
        {
            var request = new RestRequest(
                $"{API}{API_CODE}{code}",
                Method.GET,
                DataFormat.Json);
            IRestResponse response = await client.ExecuteGetTaskAsync(request);
            if (response.IsSuccessful && response.StatusCode.HasFlag(HttpStatusCode.OK))
            {
                JObject jsonObject = JObject.Parse(response.Content);
                return jsonObject.ToObject<Country>();
            }
            throw new Exception("No country found: " + code);
        }

    }
}
