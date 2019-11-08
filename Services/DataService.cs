using System.Threading.Tasks;
using System.Collections.Generic;
using WebBlazor.Data;
using System.Net.Http;
using System.Text.Json;
using System;

namespace WebBlazor.Services
{
    public class DataService
    {
        // private static readonly IList<SupplierAddress> address; 
        private HttpClient _client = new HttpClient(); 

        public DataService(){
            _client.Timeout = TimeSpan.FromSeconds(30);
            var baseUri = new Uri("https://louis-chen-webapi.netlify.com/.netlify/functions/server/");
            _client.BaseAddress = baseUri;
        }
        public async Task<IEnumerable<Address>> GetAddress(){
            HttpResponseMessage response = await _client.GetAsync("codeitem?kind=address");
            response.EnsureSuccessStatusCode();
            using var responseStream = await response.Content.ReadAsStreamAsync();
            return await JsonSerializer.DeserializeAsync<IEnumerable<Address>>(responseStream);        
        }

        public Task<List<SupplierAddress>> GetSupplierAddressAsync()
        {
            var address = new List<SupplierAddress>();
            address.Add(new SupplierAddress(){Id="1",Name="台北市"});
            address.Add(new SupplierAddress(){Id="2",Name="高雄市"});
            return Task.FromResult(address);
        }
    }
}
