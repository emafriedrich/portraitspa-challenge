# frozen_string_literal: true

class PlanetsController < ApplicationController
  def search
    extra_params = { fields: [:name], match: :word_start }
    extra_params[:where] = { id: { _not: params[:exceptIds] } } if params[:exceptIds].present?
    render json: Planet.search(params[:term], extra_params)
  end
end
