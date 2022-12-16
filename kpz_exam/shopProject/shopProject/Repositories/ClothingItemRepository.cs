using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using shopProject.Models;
using System.Diagnostics.Eventing.Reader;

namespace shopProject.Repositories
{
    public class ClothingItemRepository : IClothingItemRepository
    {
        private readonly ClothingItemDBContext _context;
        public ClothingItemRepository(ClothingItemDBContext context)
        {
            _context = context;
        }

        public async Task<ClothingItem> Create(ClothingItem clothingItem)
        {
            await _context.clothingItems.AddAsync(clothingItem);
            await _context.SaveChangesAsync();
            return clothingItem;
        }

        public  async Task Delete(int id)
        {
            var clothingItem = await _context.clothingItems.FindAsync(id);
            _context.clothingItems.Remove(clothingItem);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<ClothingItem>> Get()
        {
            return await _context.clothingItems.ToListAsync();
        }

        public async Task<ClothingItem> GetById(int id)
        {
            return await _context.clothingItems.FindAsync(id);
          
        }

        public async Task Update(int id, ClothingItem clothingItem)
        {
           
            _context.Entry(clothingItem).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
