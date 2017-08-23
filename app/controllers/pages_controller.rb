class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:home, :whatwedo]

  def home
    @what_we_do = WhatWeDo.all
    @team_members = Team.all
    @news = News.all
  end

   def whatwedo
  end
end
