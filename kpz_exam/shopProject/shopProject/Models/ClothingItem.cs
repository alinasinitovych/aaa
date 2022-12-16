using System.ComponentModel.DataAnnotations;

namespace shopProject.Models
{
    public class ClothingItem
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }

        public int Price { get; set; }
        [Required]
        public string Brand { get; set; }
        public int ReleaseYear { get; set; }
        public int Size { get; set; }
        public string? Model { get; set; }

    }

     public enum Size
    {
        XS = 34, S = 36, M = 38, L = 40, XL = 42
    }
}
