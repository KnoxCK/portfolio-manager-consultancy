class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :whatwedo]

  def home
  end

   def whatwedo
  end
end
