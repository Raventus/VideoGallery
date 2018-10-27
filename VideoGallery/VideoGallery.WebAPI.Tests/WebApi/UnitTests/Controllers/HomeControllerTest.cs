using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using VideoGallery.WebAPI;
using VideoGallery.WebAPI.Controllers;

namespace VideoGallery.Tests.WebApi.UnitTests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Check_Result_Of_IndexMethod_Is_Not_Null()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Видео галерея", result.ViewBag.Title);
        }

        [TestMethod]
        public void Check_RightRedirection_Of_SumbitQueryMethod ()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            var routeREsult = (controller.SubmitQuery("GodFuther") as RedirectToRouteResult);
            // Assert
            Assert.AreEqual("videoGalleryApiRoute", routeREsult.RouteName, "Неправильное название маршрута для перенаправления");
            Assert.AreEqual("VideoGalleryApi", routeREsult.RouteValues["controller"], "Неправильно задан контроллер");
        }
    }
}
