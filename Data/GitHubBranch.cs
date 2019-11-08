using System.Text.Json.Serialization;
namespace WebBlazor.Data
{
    /// <summary>
    /// A partial representation of a branch object from the GitHub API
    /// </summary>
    public class GitHubBranch
    {
        [JsonPropertyName("name")]
        public string Name { get; set; }
    }
        
}