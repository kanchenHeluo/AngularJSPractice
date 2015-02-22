using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Collections;
using RestDemo1.Models;

namespace RestDemo1.Services
{
    public class ContactRepositry
    {
        private const string CacheKey = "ContactStore";

        public ContactRepositry()
        {
            var ctx = HttpContext.Current;
            if (ctx != null)
            {
                if (ctx.Cache[CacheKey] == null)
                {
                    var contacts = new Contact[]{
                        new Contact
                        {
                             Id = 1,
                             Name = "Glenn Block"
                        },
                        new Contact
                        {
                             Id = 2,
                             Name = "Dan Roth"
                        }
                    };

                    ctx.Cache[CacheKey] = contacts;
                }
            }
        }

        public Contact[] GetAllContacts()
        {
            var ctx = HttpContext.Current;

            if (ctx != null && ctx.Cache[CacheKey] != null)
            {
                return (Contact[])ctx.Cache[CacheKey];
            }

            return new Contact[]{
                new Contact{
                    Id = 0,
                    Name = "Placeholder"
                }
            };
        }

        public bool SaveContact(Contact contact)
        {
            var ctx = HttpContext.Current;
            if (ctx != null)
            {
                try
                {
                    var currentData = ((Contact[])ctx.Cache[CacheKey]).ToList();
                    currentData.Add(contact);
                    ctx.Cache[CacheKey] = currentData.ToArray();
                    //save to backend db
                    return true;
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return false;
                }
            }
            return false;
        }
    }
}