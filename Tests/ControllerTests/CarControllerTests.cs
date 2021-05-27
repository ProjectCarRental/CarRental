using FluentAssertions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace Tests.ControllerTests
{
    public class CarControllerTests : TestBase
    {
        public CarControllerTests(TestWebApplicationFactory<TestStartup> factory) : base(factory)
        {
        }

        [Fact]
        public void OnePlusOneIsTwo()
        {
            var hej = 1 + 1;
            hej.Should().Be(2);
        }
    }
}
