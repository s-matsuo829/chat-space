class Api::MessagesController < ApplicationController
  before_action :set_time

  def index
    @group = Group.find(params[:group_id]) 
    @messages = @group.messages.includes(:user).where('id > ?', params[:id]) 
  end


  private
  def set_time
    wd = ["Sun", "Mon", "tue", "Wed", "Thu", "Fri", "Sat"]
    time = Time.now
    @time = wd[time.wday]
  end
end