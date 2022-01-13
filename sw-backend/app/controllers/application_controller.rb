# frozen_string_literal: true

class ApplicationController < ActionController::API
  def import
    Planet.reindex
    render status: :ok
  end
end
