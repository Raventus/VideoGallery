using System;
using System.Threading.Tasks;
using System.Web.Helpers;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using Newtonsoft.Json;
using VideoGallery.Common.Abstract;
using VideoGallery.WebAPI.Controllers;

namespace VideoGallery.WebAPI.Tests.WebApi.UnitTests.Controllers
{
    [TestClass]
    public class VideoGalleryApiControllerTest
    {
        Mock<IFilmSearchServer> mockFilmServer = new Mock<IFilmSearchServer>();
        string QueryString = "Godfather";

        [TestInitialize()]
        public void Startup()
        {
            mockFilmServer.Setup(m => m.GetListOfFilmsByFilmNameSearchQuery(It.IsAny<string>()))
             .Returns((string x) => Task.FromResult(x));
        }

        [TestMethod]
        public void Check_GetVideoGalleryByName_Returns_Json()
        {

            // Arrange
            VideoGalleryApiController apiController = new VideoGalleryApiController(mockFilmServer.Object);

            //// Act
            var Result = apiController.GetVideoGalleryByFullNameAsync(QueryString);

            //Assert
            Assert.IsInstanceOfType(Result, typeof(Task<JsonResult>));
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public async void Check_GetVideoGalleryByName_ThrowArgumentNullException_ForEmptyParametr()
        {
            // Arrange           
            VideoGalleryApiController apiController = new VideoGalleryApiController(mockFilmServer.Object);

            //// Act  
            var output = Task.Run(() => apiController.GetVideoGalleryByFullNameAsync(null));
            try
            {
               
                await output;
            }
            // Assert.Fail("An ArgumentNullException exception should have been thrown");
            //}
            //// Assert: expect ArgumentNullException
            catch (ArgumentNullException ex)
            {
                Assert.AreEqual("Parameter cannot be null or empty.", ex.Message);
            }
            catch (Exception e)
            {
                Assert.Fail(
                     string.Format("Unexpected exception of type {0} caught: {1}",
                                    e.GetType(), e.Message)
                );
            }
        }
    }
}
