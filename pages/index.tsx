
const AppView: React.FunctionComponent = () => {
  return (
    <div className="app-view">
      <div className="Box m-6">
        <div className="Box-header">
          <h3 className="Box-title">
            Active Branches
          </h3>
        </div>
        <div className="Box-body d-flex flex-row flex-justify-between flex-items-center">
          <span className="color-fg-subtle"><span className="branch-name">fix/profile-dropdown</span> Updated more than 1hr ago by <span className="text-semibold">@yashsehgal</span></span>
          <div className="log-action-wrapper d-flex flex-gap-4">
            <button className="btn btn-danger mr-2">
              remove branch
            </button>
            <button className="btn btn-primary">
              merge branch
            </button>
          </div>
        </div>
        <div className="Box-footer color-fg-subtle d-flex flex-row flex-justify-between flex-items-center">
        <span className="color-fg-subtle"><span className="branch-name">fix/profile-change-ui</span> Updated more than 12hr ago by <span className="text-semibold">@yashsehgal</span></span>
          <div className="log-action-wrapper d-flex flex-gap-4">
            <button className="btn btn-danger mr-2">
              remove branch
            </button>
            <button className="btn btn-primary">
              merge branch
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AppView;