using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using RestDemo1.Models;
using RestDemo1.Services;

namespace RestDemo1.Controllers
{
    public class ContactController : ApiController
    {
        private ContactRepositry contactRepositry;

        public ContactController()
        {
            this.contactRepositry = new ContactRepositry();
        }

        public Contact[] Get()
        {
            return contactRepositry.GetAllContacts();
        }

        public HttpResponseMessage Post(Contact contact)
        {
            this.contactRepositry.SaveContact(contact);
            var response = Request.CreateResponse<Contact>(System.Net.HttpStatusCode.Created, contact);
            
            return response;
        }
    }
    
}
