import { Routes, Route } from 'react-router-dom';

import { Dashboard } from './pages/Dashboard';
import { Tests } from './pages/Tests';
import { NoMatch } from './pages/NoMatch';
import { Reports } from './pages/Reports';
import { Settings } from './pages/Settings';
import { Plans } from './pages/Plans';
import { Runs } from './pages/Runs';
import { Tasks } from './pages/Tasks';
import { Issues } from './pages/Issues';
import { Teams } from './pages/Teams';
import React from 'react';
import { AppContext } from './context/AppContext';

export const App = () => {
    const [subNavigationOpened, setSubNavigationOpened] = React.useState(true);

    return (
        <AppContext.Provider
            value={{
                subNavigation: {
                    subNavigationOpened,
                    setSubNavigationOpened
                }
            }}
        >
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='tests' element={<Tests />} />
                <Route path='plans' element={<Plans />} />
                <Route path='runs' element={<Runs />} />
                <Route path='tasks' element={<Tasks />} />
                <Route path='issues' element={<Issues />} />
                <Route path='teams' element={<Teams />} />
                <Route path='reports' element={<Reports />} />
                <Route path='settings' element={<Settings />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </AppContext.Provider>
    );
};
