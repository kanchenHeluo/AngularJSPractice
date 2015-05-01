using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace MachAroundU.Controllers
{
    public class TopicController : Controller
    {
        public ActionResult Index()
        {
            return PartialView();
        }

        public ActionResult PostTopic()
        {
            return PartialView();
        }

        public ActionResult ViewTopic()
        {
            return PartialView();
        }
    }
}
