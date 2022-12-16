using Microsoft.EntityFrameworkCore;
using shopProject.Models;

namespace shopProject
{
    public class ClothingItemDBContext : DbContext
    {
        public ClothingItemDBContext(DbContextOptions<ClothingItemDBContext> options) : base(options)
        {
        }
        public DbSet<ClothingItem> clothingItems { get; set; }
    }
}
