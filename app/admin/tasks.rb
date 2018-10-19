# frozen_string_literal: true

ActiveAdmin.register Task do
  PAGE_PER = 10
  permit_params :due_at, :name, :comment, :task_type, :title

  controller do
    def index
      @search = scoped_collection.ransack(params[:q])
      @tasks  = @search.result(distinct: true).page(params[:page]).per(PAGE_PER)

      respond_to do |format|
        # format.html { render :tasks }
        format.json do
          render layout: false, json: @tasks.to_json
        end
      end
    end
  end
end
