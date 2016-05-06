require 'test_helper'

class WelcomeControllerTest < ActionController::TestCase
  test "success for index controller" do
    get :index

    assert_response :success
  end
end
